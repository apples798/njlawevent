import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/event', pathMatch: 'full' },
  { path: 'event', component: EventsComponent },
  { path: 'eventdetails', component: EventdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
