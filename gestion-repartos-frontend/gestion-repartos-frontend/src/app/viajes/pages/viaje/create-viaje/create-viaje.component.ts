import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ViajeControllerService } from 'src/app/api/services';
import { ConfirmDialogService } from 'src/app/shared/services/confirm-dialog/confirm-dialog.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { MySnackBarService } from 'src/app/viajes/components/snackbar/snackbar.service';
import { Reparto } from '../../../../api/models/reparto';
import { Viaje } from '../../../../api/models/viaje';

@Component({
  selector: 'app-create-viaje',
  templateUrl: './create-viaje.component.html',
  styleUrls: ['./create-viaje.component.css']
})
export class CreateViajeComponent implements OnInit {

  mode: string;
  diasDeLaSemana: string[];
  isCrearReparto: boolean;
  repartoAuxiliar: Reparto;
  createViaje: Viaje;
  repartoCreado: boolean;
  //Inicializo el formulario.
  miFormularioViaje: FormGroup = this.fb.group({
    //El día se setea automáticamente al seleccionar una fecha.
    dia: [{value: '', disabled: true}],
    //fechaDeViaje, ayudante, zona son los únicos 3 valores que el usuario debe ingresar. 
    fechaDeViaje: ['', Validators.required],
    ayudante: ['', Validators.required],
    zona:['', Validators.required],
    //Reparto nombre se setea con la creacion del Reparto. Por ej: SA1.
    repartoNombre: [{value: '', disabled: true}, Validators.required],
    /*La gananciaFija (No el total) es el pago acordado del Viaje.
    De momento la cifra cambia acorde a los aumentos, varia con el tiempo.*/
    gananciaFija:[{value: 4623.00, disabled: true}],
    /*Estos valores se calculan acorde al Reparto realizado del día.
    Varian segun las NC y total del Reparto entregado.*/
    comision170:[{value: 0, disabled: true}],
    comision150:[{value: 0, disabled: true}],
    comision125:[{value: 0, disabled: true}],
    totalViaje:[{value: 0, disabled: true}]
  })

  constructor( private sharedService: SharedService, 
               private router: Router,
               private fb: FormBuilder,
               private dialogService: ConfirmDialogService,
               private viajeService: ViajeControllerService,
               private snack: MySnackBarService,
               public pipe: DatePipe ) 
  {
    this.mode = "";
    this.diasDeLaSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    this.isCrearReparto = true;
    this.createViaje = {};
    this.repartoAuxiliar = {};
    this.repartoCreado = false;
  }

  ngOnInit(): void {
    //Modo Crear, Editar o Ver.
    this.mode = this.sharedService.getMode(this.router.url);
    //Modal de atencion.
    const options = {
      title: 'ATENCIÓN',
      message: 'Recuerde que para crear un Viaje debe crear el Reparto del mismo.',
      confirmMessage: 'Entendido',
      isCreateViaje: true
    };
    this.dialogService.open(options);
    console.log(this.miFormularioViaje.invalid)
  }

  //Capturo el evento cuando selecciono la fecha del calendario.
  dateChange($event: any) {
    this.miFormularioViaje.get("dia")?.setValue(this.obtenerDia($event.value));
  }

  guardar(){
    this.createViaje.ayudante = this.miFormularioViaje.get("ayudante")?.value;
    this.createViaje.fechaDeEntrega = this.pipe.transform(this.miFormularioViaje.get("fechaDeViaje")?.value, 'yyyy-MM-dd')!;
    this.createViaje.dia = this.miFormularioViaje.get("dia")?.value;
    this.createViaje.zona =  this.miFormularioViaje.get("zona")?.value;
    this.createViaje.gananciaFija = this.miFormularioViaje.get("gananciaFija")?.value;
    this.createViaje.comision125 = this.miFormularioViaje.get("comision125")?.value;
    this.createViaje.comision150 = this.miFormularioViaje.get("comision150")?.value;
    this.createViaje.comision170 = this.miFormularioViaje.get("comision170")?.value;
    this.createViaje.totalDeViaje = this.miFormularioViaje.get("totalViaje")?.value;
    this.createViaje.reparto = this.repartoAuxiliar;
    this.viajeService.createViaje({body:this.createViaje}).subscribe( 
      { 
      next: r => {
        this.snack.openSnackBar("El Viaje fue creado con éxito !","","Success");
        this.router.navigate(['viajes/viaje']);
      },
      error: err => {
        this.snack.openSnackBar("ERROR no se pudo crear el viaje.","","Error");
      } 
    })
  }

  //Obtengo el día de la semana.
  obtenerDia(fecha: string): string{
    const posicionDia = new Date(fecha).getDay();
    return this.diasDeLaSemana[posicionDia];
  }

  redirectCrearReparto(){
    this.isCrearReparto = false;
  }

  receiveMessage($event: Reparto){
    this.repartoAuxiliar = $event;
    this.miFormularioViaje.patchValue({
      repartoNombre: $event.nombre?.toUpperCase()
    })
    this.validarComision(this.repartoAuxiliar);
  }

  validarComision(reparto: Reparto) {
    debugger;
    if(reparto.notaDeCredito! <= reparto.totalDeReparto!*2.5/100){
      this.miFormularioViaje.get('comision170')?.setValue((reparto.totalDeReparto!*1.70) / 100);
      this.miFormularioViaje.get('totalViaje')?.setValue(this.miFormularioViaje.get('comision170')?.value + this.miFormularioViaje.get('gananciaFija')?.value);
    } else if(reparto.notaDeCredito! <= reparto.totalDeReparto!*5/100){
      this.miFormularioViaje.get('comision170')?.setValue((reparto.totalDeReparto!*1.50) / 100);
      this.miFormularioViaje.get('totalViaje')?.setValue(this.miFormularioViaje.get('comision150')?.value + this.miFormularioViaje.get('gananciaFija')?.value);
    } else {
      this.miFormularioViaje.get('comision170')?.setValue((reparto.totalDeReparto!*1.25) / 100);
      this.miFormularioViaje.get('totalViaje')?.setValue(this.miFormularioViaje.get('comision125')?.value + this.miFormularioViaje.get('gananciaFija')?.value);
    }
  }

  calcularPorcentaje(valor:number): number{
    return (valor*2.5)/100;
  }

  receiveBoolean($event: any){
    this.isCrearReparto = $event;
    this.repartoCreado = true;
  }

  tieneError(campo: any): boolean{
    return this.miFormularioViaje.get(campo)?.invalid || false;
  }

  volverListado(){
    this.router.navigate(['viajes/viaje'])
  }

}
