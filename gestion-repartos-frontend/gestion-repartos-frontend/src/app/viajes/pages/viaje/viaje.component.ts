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
  displayedColumns: string[] = ['id', 'Día', 'Ayudante', 'Fecha de Entrega',"Zona","Total de Viaje", "Ganancia Fija",
                                 'Comision 1.70%', 'Comision 1.50%', 'Comision 1.25%', 'Diferencia', 'Acciones'];
  dataSource = new MatTableDataSource<ViajeDto>([]);

  @ViewChild(MatPaginator) 'paginator': MatPaginator;

  constructor(private viajeService: ViajeControllerService) {}

  ngOnInit() {
    this.listar();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  listar() {
    this.viajeService.findAllViajes().subscribe(r => {
      this.dataSource.data = r;
      console.log(this.dataSource.data)
    })
  }
}



