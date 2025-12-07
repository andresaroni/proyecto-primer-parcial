import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { Main } from "../../components/main/main";

@Component({
  selector: 'app-home',
  imports: [Navbar, RouterOutlet, Main],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
