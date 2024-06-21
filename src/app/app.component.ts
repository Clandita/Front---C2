import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';
}
