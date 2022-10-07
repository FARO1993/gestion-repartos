import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Viaje, ViajeDto } from 'src/app/api/models';
import { ViajeControllerService } from 'src/app/api/services';
import { DeleteConfirmComponent } from '../../components/delete-confirm/delete-confirm.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MySnackBarService } from '../../components/snackbar/snackbar.service';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})

export class ViajeComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'Día', 'Ayudante', 'Fecha de Entrega',"Zona", "Ganancia Fija",
                                 'Comision 1.70%', 'Comision 1.50%', 'Comision 1.25%', "Total de Viaje",  'Acciones'];
  dataSource = new MatTableDataSource<ViajeDto>([]);
  loadingTableViajes: boolean;
  listaAuxiliar: Viaje[] = [];

  @ViewChild(MatPaginator) 'paginator': MatPaginator;

  constructor( private viajeService: ViajeControllerService,
               private _snackBar: MatSnackBar,
               private snack: MySnackBarService,
               public dialog: MatDialog,
               private router: Router ) {
    this.loadingTableViajes = false;
  }

  ngOnInit() {
    this.listar();
  }

  //Paginator de la tabla.
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //Lista de viajes.
  listar() {
    this.loadingTableViajes = true;
    this.viajeService.findAllViajes().subscribe(r => {
      this.dataSource.data = r;
      this.listaAuxiliar = r;
      this.loadingTableViajes = false;
    })
  }

  onChangeCheckbox($event: any){
    console.log($event)
  }

  //Direccion edit.
  edit(id: number) {
    this.router.navigate([`viajes/viaje/edit/${id}`]);
  }

  //Direccion view.
  view(id: number) {
    this.router.navigate([`viajes/viaje/view/${id}`]);
  }

  //Mat dialog para eliminar elemento.
  delete(element: Viaje, i:any) {
    const id = element.id as number;
    const dialog = this.dialog.open( DeleteConfirmComponent, {
      width: '400px',
      data: element,
    });

    dialog.afterClosed().subscribe(r => {
      if( r ) {
        this.viajeService.deleteVieja({ id }).subscribe( 
          {
            next: r => {
              this.listaAuxiliar.splice(i, 1);
              this.dataSource.data = [...this.listaAuxiliar];
              this.snack.openSnackBar("El Viaje fue eliminado con éxito !","","Success");
            },
            error: err => {
              this.snack.openSnackBar("ERROR no se pudo eliminar el viaje.","","Error");
            } 
        })
      }
    });
  }

  //Direccion create.
  routingCreate(){
    this.router.navigate(['viajes/viaje/create']);
  }

}



