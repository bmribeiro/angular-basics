import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AngularBasics');
  authService = inject(Auth);
}
