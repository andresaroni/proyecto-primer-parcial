import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Servicios } from '../../../models/servicios';
import { ServiciosTuristicos } from '../../../services/servicios/servicios-turisticos';
import { RouterLink } from "@angular/router";
import { Navbar } from "../../navbar/navbar";
import { Reviews } from "../../reviews/reviews";
import { MatDialog } from '@angular/material/dialog';
import { RegistroReserva } from './crud-servicios/registro-reserva/registro-reserva';

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: string;
  destino: string;
  duracion: string;
  precioReferencial: number;
  disponibilidad: boolean;
}


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink, Navbar, Reviews],
})
export class ServiciosComponent {

  serviciosTuristicos:Servicios[]=[];

  constructor(private servicioTuri:ServiciosTuristicos, private dialog: MatDialog) {}

  ngOnInit() {
    this.cargarServicioTuristicos();
  }

  cargarServicioTuristicos(): void{
    this.servicioTuri.getServiciosTuristicos().subscribe(
      (data:Servicios[])=>{
        this.serviciosTuristicos = data;
      }
    )
  }

  openDialog(servicioParaReservar?: Servicios): void { // CAMBIO AQUÍ: Cambia el tipo y el nombre
    const dialogRef = this.dialog.open(RegistroReserva, {
      width: '600px',
      data: { servicio: servicioParaReservar } // CAMBIO AQUÍ: Pasa el servicio completo
    });
    
    // Aquí puedes añadir la lógica para manejar el resultado de la reserva si es necesario
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Reserva a registrar:', result);
        // Lógica para registrar la reserva en el backend usando this.servicioTuri.postReserva(result)
        this.registrarReserva(result);
      }
    });
  }

  registrarReserva(reserva: any): void {
    this.servicioTuri.addReserva(reserva).subscribe({
      next: (reservaCreada) => {
        console.log('Reserva registrada exitosamente:', reservaCreada);
        alert(`Reserva de ${reservaCreada.cantidadPersonas} personas realizada con éxito! ID: ${reservaCreada.id}`);
        // Aquí podrías recargar la lista de servicios o reservas si fuera necesario
      },
      error: (error) => {
        console.error('Error al registrar la reserva:', error);
        alert('Hubo un error al intentar realizar la reserva. Revise la consola.');
      }
    });
  }

}