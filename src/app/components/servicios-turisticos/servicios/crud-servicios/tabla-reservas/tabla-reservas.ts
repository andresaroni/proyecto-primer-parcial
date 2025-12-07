import { Component } from '@angular/core';
import { Reservas } from '../../../../../models/reservas';
import { ServiciosTuristicos } from '../../../../../services/servicios/servicios-turisticos';

@Component({
  selector: 'app-tabla-reservas',
  imports: [],
  templateUrl: './tabla-reservas.html',
  styleUrl: './tabla-reservas.css',
})
export class TablaReservas {

  reservas: Reservas[]=[];

  constructor(private servicioReserva: ServiciosTuristicos){}

  ngOnInit(){
      this.cargarReservas();
    }
  
    cargarReservas(): void{
      this.servicioReserva.getReservas().subscribe(
        (data: Reservas[]) =>{
          this.reservas = data;
        }
      )
    }
}
