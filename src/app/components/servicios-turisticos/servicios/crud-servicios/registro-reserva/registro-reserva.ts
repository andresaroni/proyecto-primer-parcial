import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-registro-reserva',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  templateUrl: './registro-reserva.html',
  styleUrl: './registro-reserva.css',
})
export class RegistroReserva {
  servicioForm: FormGroup;
  titulo: string;
  servicioSeleccionado: any;
  esModoRapido: boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegistroReserva>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.esModoRapido = data && data.modoRapido === true;

    if (this.esModoRapido) {
      this.titulo = 'Registro Rápido por Selección';
      this.servicioForm = this.fb.group({
        idBase: [null, Validators.required],
      });
    } else {
      this.servicioSeleccionado = data && data.servicio ? data.servicio : null;
      if (this.servicioSeleccionado) {
        this.titulo = `Realizar Reserva: ${this.servicioSeleccionado.nombre}`;
      } else {
        this.titulo = data && data.servicio ? 'Editar Servicio' : 'Registrar Nueva Reserva';
      }

      this.servicioForm = this.fb.group({
        servicioId: [this.servicioSeleccionado ? this.servicioSeleccionado.id : null, [Validators.required]],
        TuristaId: [0, [Validators.required, Validators.min(1)]],
        fechaReserva: [null, [Validators.required]],
        cantidadPersonas: [1, [Validators.required, Validators.min(1)]],
        precioReferencial: [this.servicioSeleccionado ? this.servicioSeleccionado.precioReferencial : 0],
        empresaId: [this.servicioSeleccionado ? this.servicioSeleccionado.empresaId : null],
        id: [null],
      });

    }
  }

  onRegistrar(): void {
    if (this.servicioForm.valid) {
        const formValue = this.servicioForm.value;
        const precioUnitario = formValue.precioReferencial;
        const cantidad = formValue.cantidadPersonas;
        const precioReserva = precioUnitario * cantidad;
        const reserva: any = {
            servicioId: formValue.servicioId,
            turistaId: formValue.TuristaId,
            fechaReserva: formValue.fechaReserva,
            cantidadPersonas: cantidad,
            estado: 'Pendiente',
            precioReserva: precioReserva,
        };
        this.dialogRef.close(reserva);
    }
  }

  onCancelar(): void {
    this.dialogRef.close();
  }
}
