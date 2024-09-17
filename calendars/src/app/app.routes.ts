import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'event-calendar',
    pathMatch: 'full'
  },
  { path: 'customers', component: CustomersComponent },
  { path: 'event-calendar', component: EventCalendarComponent },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'settings', component: SettingsComponent },
   { path: 'profile-editor', component: ProfileEditorComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
