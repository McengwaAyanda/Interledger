import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true
})
export class LandingComponent {

  learnMore() {
    alert('This platform helps you manage your community savings effectively.');
  }

}
