import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  DayService, WeekService, WorkWeekService, MonthService, AgendaService,
  ScheduleModule, DragAndDropService, ResizeService, ScheduleComponent, CellClickEventArgs,
  View 
} from '@syncfusion/ej2-angular-schedule';
import { 
  TreeViewModule, DragAndDropEventArgs, NodeSelectEventArgs, TreeViewComponent 
} from '@syncfusion/ej2-angular-navigations';
import { waitingList } from '../assets/data'; 
import { closest } from '@syncfusion/ej2-base';
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
    CalendarComponent
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
