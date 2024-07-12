import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TargetPageComponent } from './target-page/target-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'target-page', component: TargetPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
