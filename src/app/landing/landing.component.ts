import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BorrowComponent } from '../borrow/borrow.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  imports: [LandingComponent, BorrowComponent],
  styleUrls: ['./landing.component.css'],
  standalone: true
})
export class LandingComponent implements OnInit{

  learnMore() {
    alert('This platform helps you manage your community savings effectively.');
  }
  constructor(private readonly router: Router){}
  ngOnInit(): void {
      
  }
  navigateTo(urlPath:string){
    this.router.navigate([urlPath]);
  }

}
