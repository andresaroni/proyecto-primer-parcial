import { Component } from '@angular/core';
import { Servicio } from '../../servicios';
import { Servicios } from '../../../../../models/servicios';
import { RegistroServicio } from '../../registro-servicio/registro-servicio';
import { MatDialog } from '@angular/material/dialog';
import { ServiciosTuristicos } from '../../../../../services/servicios/servicios-turisticos';

@Component({
  selector: 'app-tabla-servicios',
  imports: [],
  templateUrl: './tabla-servicios.html',
  styleUrl: './tabla-servicios.css',
})
export class TablaServicios {
  servicios: Servicio[] = [];
  serviciosTuristicos: Servicios[] = [];

  constructor(private dialog: MatDialog, private servicioTuri: ServiciosTuristicos) { }

  ngOnInit() {
    this.cargarServicioTuristicos();
  }

  cargarServicioTuristicos(): void {
    this.servicioTuri.getServiciosTuristicos().subscribe(
      (data: Servicios[]) => {
        this.serviciosTuristicos = data;
      }
    )
  }

  openDialog(servicioParaEditar?: Servicio): void {
    const dialogRef = this.dialog.open(RegistroServicio, {
      width: '600px',
      data: { servicio: servicioParaEditar }
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        if (resultado.id) {
          this.actualizarServicio(resultado);
        } else {
          this.registrarServicio(resultado);
        }
      }
    });
  }

  registrarServicio(nuevoServicio: Servicio): void {
    const nuevoId = this.servicios.length > 0 ? Math.max(...this.servicios.map(s => s.id)) + 1 : 1;
    nuevoServicio.id = nuevoId;
    this.servicios = [...this.servicios, nuevoServicio];
  }

  actualizarServicio(servicioActualizado: Servicio): void {
    this.servicios = this.servicios.map(s =>
      s.id === servicioActualizado.id ? servicioActualizado : s
    );
  }
}
