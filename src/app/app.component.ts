import { Component } from '@angular/core';
<<<<<<< HEAD
import { LandingComponent } from './landing/landing.component';
import { VotingPollComponent } from "./voting-poll/voting-poll.component"; // Import LandingComponent
=======
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BorrowComponent } from './borrow/borrow.component';
>>>>>>> eb25fb0bac4352aa56e6e826d7eeb6d64a7165e5

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent, BorrowComponent],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
<<<<<<< HEAD
  standalone: true,  // Standalone component setup
  imports: [LandingComponent, VotingPollComponent] // Import LandingComponent here
  // Import LandingComponent here
=======
  //  './landing.css'

>>>>>>> eb25fb0bac4352aa56e6e826d7eeb6d64a7165e5
})
export class AppComponent {
  title = 'Community Savings Platform';
}
