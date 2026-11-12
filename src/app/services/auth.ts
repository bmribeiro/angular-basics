import { Service, signal } from '@angular/core';

@Service()
export class Auth {
  // Reactive state indicating whether the user is authenticated
  isAuthenticated = signal<boolean>(false);

  login(): void {
    this.isAuthenticated.set(true);
  }

  logout(): void {
    this.isAuthenticated.set(false);
  }
}
