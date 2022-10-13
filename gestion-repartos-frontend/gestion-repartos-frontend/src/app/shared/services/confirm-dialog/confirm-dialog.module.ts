import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogService } from './confirm-dialog.service';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
  ],
  providers: [
    ConfirmDialogService
  ]

})
export class ConfirmDialogModule { }
