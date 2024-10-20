import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { RouterOutlet } from '@angular/router';
import { BorrowComponent } from './borrow/borrow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent, BorrowComponent,],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Community Savings Platform';
}




// @NgModule({
//   declarations: [AppComponent, VotingPollComponent],
//   imports: [
   
//     // other necessary imports
//   ],
//   bootstrap: [AppComponent]
// })
export class AppModule {}

