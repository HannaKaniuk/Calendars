import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CalendarComponent } from './calendar/calendar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    SidebarComponent,
    CalendarComponent,
    RouterOutlet,
     RouterModule
  ]
})
export class AppComponent {
  
}
  

