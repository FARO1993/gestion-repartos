import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmDialogService } from '../../../../shared/services/confirm-dialog/confirm-dialog.service';
import { Reparto } from '../../../../api/models/reparto';

interface ValoresNumericos {
  efectivo: number;
  cheque: number;
  descuento: number;
  facturasFirmadas: number;
  mercadoPago: number;
  notaDeCredito: number;
  transferencias: number;
}

@Component({
  selector: 'app-create-reparto',
  templateUrl: './create-reparto.component.html',
  styleUrls: ['./create-reparto.component.css']
})
export class CreateRepartoComponent implements OnInit {
  objetoAuxiliar: [] = []
  //Inicializo el Formulario.
  miFormularioReparto: FormGroup = this.fb.group({
    //Todos estos campos son requeridos.
    responsableDeReparto: ['', Validators.required],
    nombre: ['', Validators.required],
    efectivo: [null, Validators.required],
    descuento: [null, Validators.required],
    notaDeCredito: [null, Validators.required],
    cheque: [null, Validators.required],
    mercadoPago: [null, Validators.required],
    facturasFirmadas: [null, Validators.required],
    transferencias: [null, Validators.required],
    totalEntregado: [{value: null, disabled: true}],
    totalDeReparto: [null, Validators.required],
    diferencia: [{value: null, disabled: true}]
  })
  repartoCreate: Reparto;
  isCrearReparto: boolean;
  @Output() messageEvent = new EventEmitter<Reparto>();
  @Output() booleanEvent = new EventEmitter<boolean>();

  constructor(private router: Router,
    private fb: FormBuilder,
    private dialogService: ConfirmDialogService) {
    this.repartoCreate = {};
    this.isCrearReparto = true;
  }

  ngOnInit(): void {
    console.log("Hola soy el crear reparto")
  }

  //Emito un reparto al componente create-viaje para finalizar su creacion.
  sendMessage() {
    this.messageEvent.emit(this.repartoCreate);
  }
  //Emito un boolean al componente create-viaje para finalizar la creacion de Reparto.
  sendBoolean() {
    this.booleanEvent.emit(this.isCrearReparto);
  }

  //Calculo la sumatoria total de los campos tipo number.
  calcularTotalDeReparto(valoresFormulario: FormGroup) {
    //Nuevo objeto con los valores numericos del form para la suma.
    //De esta manera no modifico el original. 
    let valoresNumericos: ValoresNumericos;
    valoresNumericos = {
      efectivo: valoresFormulario.get('efectivo')?.value,
      cheque: valoresFormulario.get('cheque')?.value,
      descuento: valoresFormulario.get('descuento')?.value,
      facturasFirmadas: valoresFormulario.get('facturasFirmadas')?.value,
      mercadoPago: valoresFormulario.get('mercadoPago')?.value,
      notaDeCredito: valoresFormulario.get('notaDeCredito')?.value,
      transferencias: valoresFormulario.get('transferencias')?.value
    }
    this.miFormularioReparto.get('totalEntregado')?.setValue(this.suma(valoresNumericos));
    this.miFormularioReparto.get('diferencia')?.setValue(valoresFormulario.get('totalDeReparto')?.value - this.miFormularioReparto.get('totalEntregado')?.value)
  }

  crear(form: FormGroup){
    //Creo una variable con las options para pasar al dialogService.
    const options = {
      title: '¿ESTA SEGURO?',
      message: 'Se va a crear un Reparto para asociar al Viaje.',
      confirmMessage: 'Si',
      cancelMessage: 'No',
    }
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.repartoCreate.cheques = this.miFormularioReparto.get('cheque')?.value;
        this.repartoCreate.descuentos = this.miFormularioReparto.get('descuento')?.value;
        this.repartoCreate.efectivo = this.miFormularioReparto.get('efectivo')?.value;
        this.repartoCreate.facturasFirmadas = this.miFormularioReparto.get('facturasFirmadas')?.value;
        this.repartoCreate.mercadoPago = this.miFormularioReparto.get('mercadoPago')?.value;
        this.repartoCreate.nombre = this.miFormularioReparto.get('nombre')?.value;
        this.repartoCreate.notaDeCredito = this.miFormularioReparto.get('notaDeCredito')?.value;
        this.repartoCreate.responsableDeReparto = this.miFormularioReparto.get('responsableDeReparto')?.value;
        this.repartoCreate.totalDeReparto = this.miFormularioReparto.get('totalDeReparto')?.value;
        this.repartoCreate.transferencias = this.miFormularioReparto.get('transferencias')?.value;
        this.repartoCreate.diferencia = this.miFormularioReparto.get('diferencia')?.value;
        this.repartoCreate.totalEntregado = this.miFormularioReparto.get('totalEntregado')?.value;
        this.sendMessage();
        this.sendBoolean();
      }
    })
  }

  //Cancelo la creacion del Reparto.
  cancel() {
    this.sendBoolean();
  }

  //Sumo todos los valores del Objeto.
  suma(valoresFormulario: ValoresNumericos): number {
    return Object.values(valoresFormulario).reduce((a, b) => a + b);
  }

  tieneError(campo: any): boolean{
    return this.miFormularioReparto.get(campo)?.invalid || false;
  }


}
