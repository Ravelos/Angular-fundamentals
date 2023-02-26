import { Routes } from '@angular/router';
import { Error404Component } from './app/errors/404.component';
import { CreateEventComponent } from './app/events/create-event-component/create-event.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventRouteActivator } from './app/events/event-details/event-route-activator.service';
import { EventsListComponent } from './app/events/event-list-component/events-list-component';
import { EventsListResolver } from './app/events/shared/events-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
