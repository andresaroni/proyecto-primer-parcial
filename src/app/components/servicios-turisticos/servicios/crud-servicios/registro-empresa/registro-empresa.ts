import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-registro-empresa',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './registro-empresa.html',
  styleUrl: './registro-empresa.css',
})
export class RegistroEmpresa {
  servicioForm: FormGroup;
  titulo: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegistroEmpresa>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.titulo = data && data.empresa ? 'Editar Empresa' : 'Registrar Nueva Empresa';

    this.servicioForm = this.fb.group({
      id: [null],
      nombreEmpresa: ['', Validators.required], 
      ruc: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      serviciosOfrecidos: [[], Validators.required] 
    });

    if (data && data.empresa) {
      this.servicioForm.patchValue(data.empresa);
    }
  }

  onGuardar(): void {
    if (this.servicioForm.valid) {
      const formValue = this.servicioForm.value;
      if (!Array.isArray(formValue.serviciosOfrecidos)) {
         formValue.serviciosOfrecidos = [formValue.serviciosOfrecidos];
      }
      this.dialogRef.close(formValue);
    }
  }

  onCancelar(): void {
    this.dialogRef.close();
  }
}