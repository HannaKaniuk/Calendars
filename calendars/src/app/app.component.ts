import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService,ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScheduleModule],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: `<ejs-schedule [selectedDate]= "setDate" [currentView]="setView"> </ejs-schedule>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calendars';
  public setView: View = 'Month';
public setDate: Date= new Date (2024, 7, 11)
}


