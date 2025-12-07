import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Servicios } from '../../../models/servicios';
import { ServiciosTuristicos } from '../../../services/servicios/servicios-turisticos';
import { RouterLink } from "@angular/router";
import { Navbar } from "../../navbar/navbar";
import { Reviews } from "../../reviews/reviews";


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
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink, Navbar, Reviews],
})
export class ServiciosComponent {

  serviciosTuristicos:Servicios[]=[];

  constructor(private servicioTuri:ServiciosTuristicos) {}

  ngOnInit() {
    this.cargarServicioTuristicos();
  }

  cargarServicioTuristicos(): void{
    this.servicioTuri.getServiciosTuristicos().subscribe(
      (data:Servicios[])=>{
        this.serviciosTuristicos = data;
      }
    )
  }

}