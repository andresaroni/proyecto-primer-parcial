import { Component } from '@angular/core';
import { TablaServicios } from "./tabla-servicios/tabla-servicios";
import { TablaEmpresas } from "./tabla-empresas/tabla-empresas";
import { TablaTuristas } from "./tabla-turistas/tabla-turistas";
import { TablaReservas } from "./tabla-reservas/tabla-reservas";
import { Navbar } from "../../../navbar/navbar";

@Component({
  selector: 'app-crud-servicios',
  imports: [TablaServicios, TablaEmpresas, TablaTuristas, TablaReservas, Navbar],
  templateUrl: './crud-servicios.html',
  styleUrl: './crud-servicios.css',
})
export class CrudServicios {

  
}
