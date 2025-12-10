import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Turistas } from '../../../../../models/turistas'; 
import { ServiciosTuristicos } from '../../../../../services/servicios/servicios-turisticos';
import { RegistroTurista } from '../registro-turista/registro-turista';

@Component({
  selector: 'app-tabla-turistas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-turistas.html',
  styleUrl: './tabla-turistas.css',
})
export class TablaTuristas implements OnInit {

  turistas: Turistas[] = [];

  constructor(
    private dialog: MatDialog, 
    private servicioTuri: ServiciosTuristicos
  ) { }

  ngOnInit() {
    this.cargarTuristas();
  }

  cargarTuristas(): void {
    this.servicioTuri.getTuristas().subscribe(
      (data: Turistas[]) => {
        this.turistas = data;
      }
    );
  }

  openDialog(turistaEditar?: Turistas): void {
    const dialogRef = this.dialog.open(RegistroTurista, {
      width: '600px',
      data: { turista: turistaEditar }
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        if (resultado.id) {
          this.actualizarTurista(resultado);
        } else {
          this.registrarTurista(resultado);
        }
      }
    });
  }

  registrarTurista(nuevoTurista: Turistas): void {
    this.servicioTuri.addTurista(nuevoTurista).subscribe({
      next: (turistaCreado) => {
        this.turistas = [...this.turistas, turistaCreado];
        alert('Turista registrado con éxito.');
      },
      error: (err) => {
        console.error(err);
        alert('Error al registrar');
      }
    });
  }

  actualizarTurista(turistaActualizado: Turistas): void {
    if (!turistaActualizado.id) return;

    this.servicioTuri.updateTurista(turistaActualizado.id, turistaActualizado).subscribe({
      next: (turistaEditado) => {
        this.turistas = this.turistas.map(t => t.id === turistaEditado.id ? turistaEditado : t);
        alert('Turista actualizado con éxito.');
      },
      error: (err) => {
        console.error(err);
        alert('Error al actualizar');
      }
    });
  }

  editarTurista(turista: Turistas): void {
    this.openDialog(turista);
  }

  eliminarTurista(id: number): void {
    if (confirm(`¿Eliminar turista ID: ${id}?`)) {
      this.servicioTuri.deleteTurista(id).subscribe({
        next: () => {
          this.turistas = this.turistas.filter(t => t.id !== id);
          alert('Turista eliminado.');
        },
        error: (err) => console.error(err)
      });
    }
  }
}