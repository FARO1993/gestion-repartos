import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RepartoComponent } from './pages/reparto/reparto.component';
import { CreateViajeComponent } from './pages/viaje/create-viaje/create-viaje.component';
import { ViajeComponent } from './pages/viaje/viaje.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'viaje',
        component: ViajeComponent
      },
      {
        path: 'viaje/create',
        component: CreateViajeComponent
      },
      {
        path: 'viaje/edit/:id',
        component: CreateViajeComponent
      },
      {
        path: 'viaje/view/:id',
        component: CreateViajeComponent
      },
      {
        path: 'reparto',
        component: RepartoComponent
      },
    ]
  }
] 


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ViajesRoutingModule { }
