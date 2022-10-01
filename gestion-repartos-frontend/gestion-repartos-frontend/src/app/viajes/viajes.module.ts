import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { ViajesRoutingModule } from './viajes-routing.module';
import { MaterialModule } from '../material/material.module';
import { ViajeComponent } from './pages/viaje/viaje.component';
import { RepartoComponent } from './pages/reparto/reparto.component';
import { PrimerLetraMayusculaPipe } from './pipes/primer-letra-mayuscula.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    ViajeComponent,
    RepartoComponent,
    PrimerLetraMayusculaPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ViajesRoutingModule
  ]
})
export class ViajesModule { }
