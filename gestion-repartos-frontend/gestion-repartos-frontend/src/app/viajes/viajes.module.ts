import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { ViajesRoutingModule } from './viajes-routing.module';
import { MaterialModule } from '../material/material.module';
import { ViajeComponent } from './pages/viaje/viaje.component';
import { RepartoComponent } from './pages/reparto/reparto.component';



@NgModule({
  declarations: [
    HomeComponent,
    ViajeComponent,
    RepartoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ViajesRoutingModule
  ]
})
export class ViajesModule { }
