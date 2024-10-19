import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { VotingPollComponent } from "./voting-poll/voting-poll.component"; // Import LandingComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Standalone component setup
  imports: [LandingComponent, VotingPollComponent] // Import LandingComponent here
  // Import LandingComponent here
})
export class AppComponent {
  title = 'Community Savings Platform';
}
