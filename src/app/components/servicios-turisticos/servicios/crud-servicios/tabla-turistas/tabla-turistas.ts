import { Component } from '@angular/core';
import { Turistas } from '../../../../../models/turistas';
import { ServiciosTuristicos } from '../../../../../services/servicios/servicios-turisticos';

@Component({
  selector: 'app-tabla-turistas',
  imports: [],
  templateUrl: './tabla-turistas.html',
  styleUrl: './tabla-turistas.css',
})
export class TablaTuristas {

  turistas: Turistas[]=[];

  constructor(private servicioTurista: ServiciosTuristicos){}

  ngOnInit(){
    this.cargarTuristas();
  }

  cargarTuristas(): void{
    this.servicioTurista.getTuristas().subscribe(
      (data: Turistas[]) =>{
        this.turistas = data;
      }
    )
  }

}
