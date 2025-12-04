import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { ServiciosTuristicos } from "../servicios-turisticos/servicios-turisticos";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main',
  imports: [Footer, ServiciosTuristicos, RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
