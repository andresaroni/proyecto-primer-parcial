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
      this.titulo = data && data.servicio ? 'Editar Servicio' : 'Registrar Nueva Reserva';

      this.servicioForm = this.fb.group({
        nombre: ['', Validators.required],
        tipo: ['', Validators.required],
        destino: ['', Validators.required],
        duracion: ['', Validators.required],
        cantidadPersonas: [0, [Validators.required, Validators.min(1)]],
        TuristaId: [0, [Validators.required, Validators.min(1)]],
        id: [null],
      });

      if (data && data.servicio) {
        this.servicioForm.patchValue(data.servicio);
      }
    }
  }

  onGuardar(): void {
    if (this.servicioForm.valid) {
      this.dialogRef.close(this.servicioForm.value);
    }
  }

  onCancelar(): void {
    this.dialogRef.close();
  }

}
