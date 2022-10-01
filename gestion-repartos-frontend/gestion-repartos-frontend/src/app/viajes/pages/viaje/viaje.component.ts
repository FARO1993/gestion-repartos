import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViajeDto } from 'src/app/api/models';
import { ViajeControllerService } from 'src/app/api/services';

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

  @ViewChild(MatPaginator) 'paginator': MatPaginator;

  constructor(private viajeService: ViajeControllerService) {
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
      this.loadingTableViajes = false;
    })
  }

  onChangeCheckbox($event: any){
    console.log($event)
  }

  edit() {
    window.alert("Holis soy el edit")
  }

  view() {
    window.alert("Holis soy el view")
  }

  delete() {
    window.alert("Holis soy el delete")
  }
}



