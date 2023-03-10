import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  event: IEvent[] = [];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe((events) => {
      this.event = this.route.snapshot.data['events'];
    });
  }
  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}
