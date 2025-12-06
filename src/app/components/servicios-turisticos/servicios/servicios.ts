import { Component } from '@angular/core'; 
import { MatDialog } from '@angular/material/dialog';
import { FormularioServicioComponent } from './formulario-servicio';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 


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
  imports: [CommonModule, MatIconModule, MatButtonModule],
})
export class ServiciosComponent {
getServiceImage(arg0: string) {
throw new Error('Method not implemented.');
}
  servicios: Servicio[] = [
  ];
  
  constructor(private dialog: MatDialog) {}
  
  openDialog(servicioParaEditar?: Servicio): void {
    const dialogRef = this.dialog.open(FormularioServicioComponent, {
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

  eliminarServicio(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este servicio?')) {
      this.servicios = this.servicios.filter(s => s.id !== id);
    }
  }
}