import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SettingsComponent } from './settings/settings.component';


export const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'event-calendar', component: EventCalendarComponent },
  { path: 'project-list', component: ProjectListComponent},
  { path: 'settings', component: SettingsComponent},
];