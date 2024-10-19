import { Routes } from '@angular/router';
import { BorrowComponent } from './borrow/borrow.component';

// Define the routes for your application
const routes: Routes = [
  {
    path: 'borrow',
    component: BorrowComponent,
  },
];

// Export the routes so they can be used in other parts of the app
export const appRoutes = routes;
