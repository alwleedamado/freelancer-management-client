import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss']
})
export class ListToolbarComponent {
  @Output('create') createEvent = new EventEmitter();
  constructor() { }
  create() {
    this.createEvent.emit()
  }

}
