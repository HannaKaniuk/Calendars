import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  DayService, WeekService, WorkWeekService, MonthService, AgendaService,
  RecurrenceEditorModule, ScheduleModule, DragAndDropService, ResizeService,
  CellClickEventArgs,
  ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { DragAndDropEventArgs } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScheduleModule, RecurrenceEditorModule, DropDownListModule, DateTimePickerModule, TreeViewModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService],
})
export class AppComponent {
  @ViewChild('scheduleObj', { static: false }) scheduleObj!: ScheduleComponent;
  public scheduleInstance!: ScheduleComponent;
  
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

  constructor(private router: Router) {}

  navigateToPage() {
    this.router.navigate(['/target-page']);
  }

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

  public waitingList: { Id: number, Name: string } []= [
    {
      Id: 1,
      Name: 'Виставка 1 зала'
    },
    {
      Id: 2,
      Name: 'Виставка 2 зала'
    },
    {
      Id: 3,
      Name: 'Виставка 3 зала'
    },
  ];

  public field: Object = { dataSource: this.waitingList, id: 'Id', text: 'Name' };

  onTreeDragStop(args: DragAndDropEventArgs): void {
    let cellData: CellClickEventArgs = this.scheduleInstance.getCellDetails(args.target);
    let eventData: { [key: string]: Object} = {
      Subject: args.draggedNodeData['time'],
      SrartTime: cellData.startTime,
      EndTime: cellData.endTime,
      IsAllDay: cellData.isAllDay
    };
    this.scheduleInstance.addEvent(eventData);
  
  }
}
