import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { EventService } from './event.service';

export interface Event {
  id: number;
  tttle: string;
  date: Date;
  description: string;
  notes: string;
  eventTypeId: number;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];
  constructor(private api: EventService ) {
   }

  ngOnInit(): void {
    
    this.getEvents();
  
  }
  getEvents() {
    this.api.getAll().subscribe((results) =>  {
      this.events= results;
      console.log('JSON Response = ', JSON.stringify(results));
    })

   
}
}
