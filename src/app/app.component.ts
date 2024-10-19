import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BorrowComponent } from './borrow/borrow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent, BorrowComponent],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  //  './landing.css'

})
export class AppComponent {
  title = 'Community Savings Platform';
}
