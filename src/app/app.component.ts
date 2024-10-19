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
  title = 'Community Savings Platform';
}
