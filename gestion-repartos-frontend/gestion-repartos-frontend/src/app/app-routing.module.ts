import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './viajes/pages/home/home.component';

const routes: Routes = [
  {
    path: "viajes",
    loadChildren: () => import('./viajes/viajes.module').then(m => m.ViajesModule)
  },
  {
    path: '**',
    redirectTo: 'viajes'  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
