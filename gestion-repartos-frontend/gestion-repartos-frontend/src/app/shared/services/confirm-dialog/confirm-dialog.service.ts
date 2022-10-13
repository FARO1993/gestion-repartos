import { Injectable, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { map, Observable, take } from 'rxjs';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  //dialogRef: MatDialogRef<ConfirmDialogComponent> = this.dialog

  constructor(private dialog: MatDialog,
              private dialogRef: MatDialogRef<ConfirmDialogComponent>) { 
  }

  open(options:any) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {    
      data: {
        width: 'auto',
        title: options.title,
        message: options.message,
        cancelMessage: options.cancelMessage,
        confirmMessage: options.confirmMessage,
        isCreateViaje: options.isCreateViaje,
        data: options.data
      }
    });  
  }
   
  confirmed(): Observable<any> {
    
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));
  }
}
