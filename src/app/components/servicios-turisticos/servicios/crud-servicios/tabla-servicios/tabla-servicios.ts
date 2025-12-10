import { Component, OnInit } from '@angular/core';
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
export class TablaServicios implements OnInit {
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

  editarServicio(servicio: Servicios): void {
    this.openDialog(servicio);
  }

  eliminarServicio(id: number): void {
    if (confirm(`¿Estás seguro de que deseas eliminar el servicio con ID: ${id}?`)) {
      this.servicioTuri.deleteServicioTuristico(id).subscribe({
        next: () => {
          this.serviciosTuristicos = this.serviciosTuristicos.filter(s => s.id !== id);
          alert('Servicio eliminado con éxito.');
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
          alert('Hubo un error al intentar eliminar el servicio.');
        }
      });
    }
  }

 openDialog(servicioParaEditar?: Servicios): void {
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

registrarServicio(nuevoServicio: Servicios): void {
   this.servicioTuri.addServicioTuristico(nuevoServicio).subscribe({
      next: (servicioCreado) => {
        this.serviciosTuristicos = [...this.serviciosTuristicos, servicioCreado];
        alert('Servicio registrado con éxito.');
      },
      error: (err) => {
        console.error('Error al registrar:', err);
        alert('Error al registrar el servicio.');
      }
    });
   }

   actualizarServicio(servicioActualizado: Servicios): void {
   this.servicioTuri.updateServicioTuristico(servicioActualizado.id, servicioActualizado).subscribe({
      next: (servicioEditado) => {
        this.serviciosTuristicos = this.serviciosTuristicos.map(s =>
          s.id === servicioEditado.id ? servicioEditado : s
        );
        alert('Servicio actualizado con éxito.');
      },
      error: (err) => {
        console.error('Error al actualizar:', err);
        alert('Error al actualizar el servicio.');
      }
    });
  }
}