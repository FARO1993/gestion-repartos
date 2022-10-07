import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { ViajesRoutingModule } from './viajes-routing.module';
import { MaterialModule } from '../material/material.module';
import { ViajeComponent } from './pages/viaje/viaje.component';
import { RepartoComponent } from './pages/reparto/reparto.component';
import { PrimerLetraMayusculaPipe } from './pipes/primer-letra-mayuscula.pipe';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { CreateViajeComponent } from './pages/viaje/create-viaje/create-viaje.component';


@NgModule({
  declarations: [
    HomeComponent,
    ViajeComponent,
    RepartoComponent,
    PrimerLetraMayusculaPipe,
    DeleteConfirmComponent,
    SnackbarComponent,
    CreateViajeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    ViajesRoutingModule
  ]
})
export class ViajesModule { }
