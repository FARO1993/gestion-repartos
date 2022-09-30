import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RepartoComponent } from './pages/reparto/reparto.component';
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
