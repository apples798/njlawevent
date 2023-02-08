import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EventsComponent } from './events/events.component';
import {MatListModule} from '@angular/material/list';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {EventService} from './events/event.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [HttpClient,EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
