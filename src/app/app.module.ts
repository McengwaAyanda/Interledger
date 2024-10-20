import { LandingComponent } from './landing/landing.component';
import { PlatformComponent } from './platform/platform.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


// Define your routes here
export const appRoutes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'platform', component: PlatformComponent }
];


export class AppModule { }
