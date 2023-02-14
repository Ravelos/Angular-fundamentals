import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

declare let toastr: any
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
            (click)="handleThumbnailClick(event?.name)"
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit{
events:any[] | undefined;
  constructor(
    private eventService:EventService,
    private toastrService:ToastrService
    ){
  }

  ngOnInit(){
    this.events = this.eventService.getEvents();
  }
  handleThumbnailClick(eventName: string){
    this.toastrService.success(eventName);
  }
}


