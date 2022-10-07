import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-create-viaje',
  templateUrl: './create-viaje.component.html',
  styleUrls: ['./create-viaje.component.css']
})
export class CreateViajeComponent implements OnInit {

  mode: string;
  diasDeLaSemana: string[];

  //Inicializo el formulario.
  miFormularioViaje: FormGroup = this.fb.group({
    dia: [{value: '', disabled: true}],
    fechaDeViaje: ['', Validators.required],
    ayudante: ['', Validators.required],
    zona:['', Validators.required],
    gananciaFija:[{value: 4000, disabled: true}, Validators.required],
    comision170:[{value: 0, disabled: true}, Validators.required],
    comision150:[{value: 0, disabled: true}, Validators.required],
    comision125:[{value: 0, disabled: true}, Validators.required],
    totalViaje:[{value: 0, disabled: true}, Validators.required]
  })

  constructor( private sharedService: SharedService, 
               private router: Router,
               private fb: FormBuilder ) 
  {
    this.mode = "";
    this.diasDeLaSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  }

  ngOnInit(): void {
    //Modo Crear, Editar o Ver.
    this.mode = this.sharedService.getMode(this.router.url);
  }

  //Capturo el evento cuando selecciono la fecha del calendario.
  dateChange($event: any) {
    this.miFormularioViaje.get('dia')?.setValue(this.obtenerDia($event.value));
  }

  guardar(){
    console.log(this.miFormularioViaje.get('ayudante')?.value)
    console.log(this.miFormularioViaje.get('fechaDeViaje')?.value)
    console.log(this.miFormularioViaje.get('dia')?.value)
  }

  //Obtengo el día de la semana.
  obtenerDia(fecha: string): string{
    const posicionDia = new Date(fecha).getDay();
    return this.diasDeLaSemana[posicionDia];
  }

}
