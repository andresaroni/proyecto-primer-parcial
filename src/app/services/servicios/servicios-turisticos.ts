import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicios } from '../../models/servicios';
import { Empresas } from '../../models/empresas';
import { Turistas } from '../../models/turistas';
import { Reservas } from '../../models/reservas';

@Injectable({
 providedIn: 'root',
})
export class ServiciosTuristicos {
  private serviciosTuristicosUrl = "https://api-backend-ltkx.onrender.com/servicios";
  private empresasUrl = "https://api-backend-ltkx.onrender.com/empresas";
  private turistasUrl = "https://api-backend-ltkx.onrender.com/turistas";
  private reservasUrl = "https://api-backend-ltkx.onrender.com/reservas";

  constructor(private httpcliente:HttpClient){}

  getServiciosTuristicos(): Observable<Servicios[]>{
   return this.httpcliente.get<Servicios[]>(this.serviciosTuristicosUrl);
  }

  getEmpresas(): Observable<Empresas[]>{
   return this.httpcliente.get<Empresas[]>(this.empresasUrl);
  }  

  getTuristas(): Observable<Turistas[]>{
   return this.httpcliente.get<Turistas[]>(this.turistasUrl);
  }

  getReservas(): Observable<Reservas[]>{
   return this.httpcliente.get<Reservas[]>(this.reservasUrl);
  }

  addServicioTuristico(servicio: Servicios): Observable<Servicios> {
    return this.httpcliente.post<Servicios>(this.serviciosTuristicosUrl, servicio);
  }

  updateServicioTuristico(id: number, servicio: Servicios): Observable<Servicios> {
    const url = `${this.serviciosTuristicosUrl}/${id}`;
    return this.httpcliente.put<Servicios>(url, servicio);
  }

  deleteServicioTuristico(id: number): Observable<any> {
    const url = `${this.serviciosTuristicosUrl}/${id}`;
    return this.httpcliente.delete(url);
  }
}