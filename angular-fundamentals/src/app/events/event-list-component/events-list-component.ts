import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: any[] | undefined;

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}
