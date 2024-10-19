// app.module.ts (or main.ts)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BorrowComponent } from './borrow/borrow.component';
import { appRoutes } from './app.routes';  // Import your routes

@NgModule({
  declarations: [
    AppComponent,
    BorrowComponent, // Declare your component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),  // Add RouterModule and pass the routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
