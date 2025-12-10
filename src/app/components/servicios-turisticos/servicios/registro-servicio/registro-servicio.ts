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
  selector: 'app-registro-servicio',
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
  templateUrl: './registro-servicio.html',
  styleUrl: './registro-servicio.css',
})
export class RegistroServicio {
  servicioForm: FormGroup;
  titulo: string;
  esModoRapido: boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegistroServicio>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.esModoRapido = data && data.modoRapido === true;

    if (this.esModoRapido) {
      this.titulo = 'Registro Rápido por Selección';
      this.servicioForm = this.fb.group({
        idBase: [null, Validators.required],
      });
    } else {
      this.titulo = data && data.servicio ? 'Editar Servicio' : 'Registrar Nuevo Servicio';

      this.servicioForm = this.fb.group({
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        tipo: ['', Validators.required],
        destino: ['', Validators.required],
        duracion: ['', Validators.required],
        precioReferencial: [null, [Validators.required, Validators.min(1)]],
        empresaId: [null, [Validators.required, Validators.min(1)]],
        disponibilidad: [true, Validators.required],
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
