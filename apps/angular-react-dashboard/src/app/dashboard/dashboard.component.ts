import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ReactGraph from '@angular-react-dashboard/react-graph';



@Component({
  selector: 'angular-react-dashboard-dashboard',
  standalone: true,
  template: `<div #reactRoot></div>`,
})

export class DashboardComponent implements AfterViewInit {
  @ViewChild('reactRoot', { static: false }) reactRoot!: ElementRef;

  ngAfterViewInit() {
    const root = ReactDOM.createRoot(this.reactRoot.nativeElement);
    root.render(React.createElement(ReactGraph)); 
  }
}
