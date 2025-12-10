import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-registro-turista',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './registro-turista.html',
  styleUrl: './registro-turista.css',
})
export class RegistroTurista {

  servicioForm: FormGroup;
  titulo: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegistroTurista>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.titulo = data && data.turista ? 'Editar Turista' : 'Registrar Nuevo Turista';

    this.servicioForm = this.fb.group({
      id: [null],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nacionalidad: ['', Validators.required],
    });
    
    if (data && data.turista) {
      this.servicioForm.patchValue(data.turista);
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