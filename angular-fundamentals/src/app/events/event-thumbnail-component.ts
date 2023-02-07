import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail-component.html',
  styles:[`.pad-left { margin-left: 10px;}
            .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent {
  @Input() event: any;

  someProperty: any = 'some value';

  logFoo() {
    console.log('Foo');
  }
}
