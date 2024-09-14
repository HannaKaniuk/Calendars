import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  DayService, WeekService, WorkWeekService, MonthService, AgendaService,
   ScheduleModule, DragAndDropService, ResizeService,
  ScheduleComponent, CellClickEventArgs
} from '@syncfusion/ej2-angular-schedule';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { View} from '@syncfusion/ej2-angular-schedule';
import { TreeViewModule, DragAndDropEventArgs, NodeSelectEventArgs, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { waitingList} from '../assets/data';  
import { closest } from '@syncfusion/ej2-base';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ScheduleModule, 
    TreeViewModule,
    RouterModule,
    ProfileEditorComponent,
    ReactiveFormsModule,
    CommonModule],
  template: `
    <nav>
      <button type="button" (click)="toggleEditor('profile')">
        Profile Editor
      </button>
    </nav>
    <app-profile-editor *ngIf="showProfileEditor"></app-profile-editor>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService],

})
export class AppComponent implements AfterViewInit {

  @ViewChild('scheduleObj') scheduleObj!: ScheduleComponent;
  @ViewChild('treeObj') treeObj!: TreeViewComponent;

  public scheduleInstance!: ScheduleComponent;
  public title = 'calendars';
  public setView: View = 'Week';
  public setDate: Date = new Date(2024, 0, 11);
  public waitingList = waitingList;  
  public field: Record<string, any> = { dataSource: waitingList, id: 'Id', text: 'Name' };
  public allowDragAndDrop = true;

  constructor(private router: Router) {}
  navigateToPage() {
    console.log('Navigating to client page...');
    this.router.navigate(['/customers']);
  }
  
  navigateToPageSettings(){
    this.router.navigate(['/settings']);
  }

  navigateToPageProject(){
    this.router.navigate(['/project-list']);
  }

  showConfig(){
    this.router.navigate(['/config']); 
  }

  editor: EditorType = 'name';

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

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

