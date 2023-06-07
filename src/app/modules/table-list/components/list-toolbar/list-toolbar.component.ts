import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.scss']
})
export class ListToolbarComponent {
  @Output('create') createEvent = new EventEmitter();
  @Input() createBtnLabel = "Create New"
  constructor() { }
  create() {
    this.createEvent.emit()
  }

}
