import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'angular-root',
  standalone: true,
  imports: [DashboardComponent],
  template: `<angular-react-dashboard-dashboard></angular-react-dashboard-dashboard>`,
})
export class AppComponent {}
