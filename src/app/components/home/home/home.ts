import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
