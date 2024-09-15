import { View } from '@syncfusion/ej2-angular-schedule';
import { RouterModule } from '@angular/router';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NodeSelectEventArgs } from '@syncfusion/ej2-angular-navigations';
import { ScheduleComponent, CellClickEventArgs } from '@syncfusion/ej2-angular-schedule';
import { TreeViewComponent, DragAndDropEventArgs } from '@syncfusion/ej2-angular-navigations';
import {
  DayService, WeekService, WorkWeekService, MonthService, AgendaService,
  DragAndDropService, ResizeService
} from '@syncfusion/ej2-angular-schedule';
import { waitingList } from '../../assets/data';
import { closest } from '@syncfusion/ej2-base';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [
    DayService, WeekService, WorkWeekService, MonthService, AgendaService,
    DragAndDropService, ResizeService
  ],
  imports: [RouterModule, ScheduleModule, TreeViewModule]
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('scheduleObj') scheduleObj!: ScheduleComponent;
  @ViewChild('treeObj') treeObj!: TreeViewComponent;

  public scheduleInstance!: ScheduleComponent;
  public title = 'calendars';
  public setView: View = 'Week';
  public setDate: Date = new Date(2024, 0, 11);
  public waitingList = waitingList;  
  public field: Record<string, any> = { dataSource: waitingList, id: 'Id', text: 'Name' };
  public allowDragAndDrop = true;

  ngAfterViewInit() {
    this.scheduleInstance = this.scheduleObj;
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

  public onTreeDrag(args: DragAndDropEventArgs): void {
    if (args.target && args.target.classList.contains('e-work-cells')) {
      args.dropIndicator = 'e-drop-okay';
    } else {
      args.dropIndicator = 'e-no-drop'; 
    }
  }

  public onTreeDragStop(args: DragAndDropEventArgs): void {
    let scheduleElem: Element = closest(args.target, '.e-content-wrap') as Element;
    try {
      if (scheduleElem && args.target.classList.contains('e-work-cells')) {
        let treeViewData: Record<string, any>[] = this.treeObj.fields.dataSource as Record<string, any>[];
        let draggedNodeId = parseInt(args.draggedNodeData['id'] as string, 10);

        let filteredData: Record<string, any>[] = treeViewData.filter(
          (item: any) => item.Id === draggedNodeId
        );

        if (filteredData.length > 0) {
          let cellData: CellClickEventArgs = this.scheduleObj.getCellDetails(args.target);
          if (cellData) {
            let maxID: number = Number(this.scheduleObj.getEventMaxID()) + 1; 
            let eventData: Record<string, any> = {
              Id: maxID,
              Subject: filteredData[0]['Name'],
              Description: filteredData[0]['Description'] || '',
              StartTime: new Date(cellData.startTime), 
              EndTime: new Date(cellData.endTime),      
              IsAllDay: cellData.isAllDay
            };
           
            this.scheduleObj.openEditor(eventData, 'Add', true);
            
            let updatedList: Record<string, any>[] = treeViewData.filter(
              (item: any) => item.Id !== draggedNodeId
            );
            this.treeObj.fields.dataSource = updatedList;
            
          } else {
            console.error('Failed to get cell details');
          }
        } else {
          console.error('Dragged node data not found');
        }
      } else {
        console.error('Invalid drop target');
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  }

  public onTreeDragStart(): void {
    document.body.classList.add('e-disble-not-allowed');
  }

  public onItemSelecting(args: NodeSelectEventArgs): void {
    console.log('Node is being selected', args);
  }
}
