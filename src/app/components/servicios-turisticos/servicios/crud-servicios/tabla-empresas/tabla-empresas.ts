import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Empresas } from '../../../../../models/empresas';
import { ServiciosTuristicos } from '../../../../../services/servicios/servicios-turisticos';// Asegura la ruta
import { RegistroEmpresa } from '../registro-empresa/registro-empresa';

@Component({
  selector: 'app-tabla-empresas',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './tabla-empresas.html',
  styleUrl: './tabla-empresas.css',
})
export class TablaEmpresas implements OnInit {

  empresas: Empresas[] = [];

  constructor(
    private dialog: MatDialog,
    private servicioEmpresa: ServiciosTuristicos
  ) {}

  ngOnInit(){
    this.cargarEmpresas();
  }

  cargarEmpresas(): void{
    this.servicioEmpresa.getEmpresas().subscribe(
      (data: Empresas[]) => {
        this.empresas = data;
      }
    )
  }

  openDialog(empresaEditar?: Empresas): void {
    const dialogRef = this.dialog.open(RegistroEmpresa, {
      width: '600px',
      data: { empresa: empresaEditar }
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        if (resultado.id) {
          this.actualizarEmpresa(resultado);
        } else {
          this.registrarEmpresa(resultado);
        }
      }
    });
  }

  registrarEmpresa(nuevaEmpresa: Empresas): void {
    this.servicioEmpresa.addEmpresa(nuevaEmpresa as any).subscribe({
      next: (empresaCreada: any) => {
        this.empresas = [...this.empresas, empresaCreada];
        alert('Empresa registrada con éxito.');
      },
      error: (err) => console.error(err)
    });
  }

  actualizarEmpresa(empresa: Empresas): void {
    this.servicioEmpresa.updateEmpresa(empresa.id!, empresa as any).subscribe({
      next: (empresaEditada: any) => {
        this.empresas = this.empresas.map(e => e.id === empresaEditada.id ? empresaEditada : e);
        alert('Empresa actualizada con éxito.');
      },
      error: (err) => console.error(err)
    });
  }

  editarEmpresa(empresa: Empresas): void {
    this.openDialog(empresa);
  }

  eliminarEmpresa(id: number): void {
    if(confirm(`¿Desea eliminar la empresa ID: ${id}?`)){
        this.servicioEmpresa.deleteEmpresa(id).subscribe({
            next: () => {
                this.empresas = this.empresas.filter(e => e.id !== id);
                alert('Empresa eliminada.');
            },
            error: (err) => console.error(err)
        });
    }
  }
}