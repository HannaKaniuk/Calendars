import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the ScheduleModule for the Schedule component
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of ej2-angular-schedule module into NgModule
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, ScheduleModule ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }