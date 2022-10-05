import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Viaje } from 'src/app/api/models';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<DeleteConfirmComponent>, 
               @Inject(MAT_DIALOG_DATA) public data: Viaje ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  borrar(){
    this.dialogRef.close(true);
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
