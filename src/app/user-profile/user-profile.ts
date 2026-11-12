import { Component } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-user-profile',
  styleUrl: './user-profile.css',
  templateUrl: './user-profile.html',
})
export class UserProfile {
  name: string = 'Bruno';
  position: string = 'Developer';
  fotoUrl: string = 'https://via.placeholder.com/150';

  promote() {
    this.position = 'Senior Developer';
  }
}
