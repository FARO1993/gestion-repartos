import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      message: string,
      confirmMessage: string,
      cancelMessage: string,
      isCreateViaje: boolean, 
      data: any,
    }) { }

  ngOnInit(): void {
  }

  cancel() {
    this.close(false);
  }
  close(value: boolean) {
    this.dialogRef.close(value);
  }
  confirm() {
    this.close(true);
  }
  
  @HostListener("keydown.esc") 
  onEsc() {
    this.close(false);
  }

}
