import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  DayService, WeekService, WorkWeekService, MonthService, AgendaService,
  ScheduleModule, DragAndDropService, ResizeService
} from '@syncfusion/ej2-angular-schedule';
import { TreeViewModule} from '@syncfusion/ej2-angular-navigations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ScheduleModule, 
    TreeViewModule, 
    RouterModule, 
    SidebarComponent, 
    HeaderComponent, 
    CalendarComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService, 
    AgendaService, 
    DragAndDropService, 
    ResizeService
  ]
})
export class AppComponent {

}

