import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BorrowComponent } from './borrow/borrow.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingComponent, BorrowComponent,],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  //  './landing.css'

})
export class AppComponent {
  title = 'Community Savings Platform';
}




@NgModule({
  declarations: [AppComponent, VotingPollComponent],
  imports: [
   
    // other necessary imports
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
