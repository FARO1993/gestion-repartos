import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { ViajesRoutingModule } from './viajes-routing.module';
import { MaterialModule } from '../material/material.module';
import { ViajeComponent } from './pages/viaje/viaje.component';
import { RepartoComponent } from './pages/reparto/reparto.component';
import { PrimerLetraMayusculaPipe } from './pipes/primer-letra-mayuscula.pipe';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    ViajeComponent,
    RepartoComponent,
    PrimerLetraMayusculaPipe,
    DeleteConfirmComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ViajesRoutingModule
  ]
})
export class ViajesModule { }
