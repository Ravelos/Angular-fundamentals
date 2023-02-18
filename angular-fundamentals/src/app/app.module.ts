import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';
import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { EventsListComponent } from './events/events-list-component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
