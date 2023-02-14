import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming angular events</h1>
      <hr />
      <div class="row">
        <div
            *ngFor="let event of events" class="col-md-5">
          <event-thumbnail
            #thumbnail
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit{
events:any[] | undefined;
  constructor(private eventService:EventService){
  }

  ngOnInit(){
    this.events = this.eventService.getEvents();
  }
}


