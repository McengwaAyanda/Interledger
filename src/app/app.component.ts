import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component'; // Import LandingComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Standalone component setup
  imports: [LandingComponent]  // Import LandingComponent here
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Community Savings Platform';
=======
  
>>>>>>> 48df35a8e980c280632df5ebae040a620ee53a00
}
