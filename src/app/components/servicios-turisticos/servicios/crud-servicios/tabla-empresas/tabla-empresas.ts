import { Component } from '@angular/core';
import { Empresas } from '../../../../../models/empresas';
import { ServiciosTuristicos } from '../../../../../services/servicios/servicios-turisticos';

@Component({
  selector: 'app-tabla-empresas',
  imports: [],
  templateUrl: './tabla-empresas.html',
  styleUrl: './tabla-empresas.css',
})
export class TablaEmpresas {

  empresas: Empresas[] = [];

  constructor(private servicioEmpresa:ServiciosTuristicos){}

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

}
