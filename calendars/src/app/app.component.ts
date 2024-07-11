import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, RecurrenceEditorModule, ScheduleModule, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScheduleModule, RecurrenceEditorModule, DropDownListModule, DateTimePickerModule],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calendars';
  public setView: View = 'Week';
  public setDate: Date = new Date(2024, 0, 11);
  public eventObject: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        EventTitle: 'Art Exhibition',
        EventStart: new Date(2024, 0, 13, 2, 0),
        EventEnd: new Date(2024, 0, 13, 3, 0),
        Venue: 'Main Hall'
      },
      {
        Id: 2,
        EventTitle: 'Science Fair',
        EventStart: new Date(2024, 0, 14, 10, 0),
        EventEnd: new Date(2024, 0, 14, 12, 0),
        Venue: 'Auditorium'
      }
    ],
    fields: {
      id: 'Id',
      subject: { name: 'EventTitle', default: "New Event", title: "Enter Title" },
      startTime: { name: 'EventStart' },
      endTime: { name: 'EventEnd' }
    }
  };

  public onDragStart(args: any): void {
    if (args && args.scroll) {
      args.scroll.enable = false;
    }
  }

  public onResizeStart(args: any): void {
    if (args && args.scroll) {
      args.scroll.enable = false;
    }
  }

  public onVenueChange(event: Event): void {
    const selectedVenue = (event.target as HTMLSelectElement).value;
    if (Array.isArray(this.eventObject.dataSource)) {
      this.eventObject.dataSource = this.eventObject.dataSource.filter(e => e['Venue'] === selectedVenue);
    }
  }
}
