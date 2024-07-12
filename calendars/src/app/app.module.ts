import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TargetPageComponent } from './target-page/target-page.component'; 
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations'; 

@NgModule({
  declarations: [ 
    AppComponent,
    TargetPageComponent 
  ],
  imports: [ 
    BrowserModule,
    ScheduleModule,
    RecurrenceEditorModule,
    DropDownListModule,
    DateTimePickerModule,
    TreeViewModule 
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
