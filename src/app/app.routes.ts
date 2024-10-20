import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PlatformComponent } from './platform/platform.component';
import { NgModule } from '@angular/core';

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'platform', component: PlatformComponent },
];


export const appRoutes = routes;
