import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../events/event.service';


@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

  id: any;
  eventDetails:any;
  constructor(private route: ActivatedRoute, private api: EventService ) { 
    this.id = this.route.snapshot.params;
  }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
     
    });

    this.getEventById();
  }
 
    getEventById() {
      this.api.getEventById(this.id).subscribe((results) =>  {
        this.eventDetails= results;
        console.log('JSON Response = ', JSON.stringify(results));
      })
    }
  

}
