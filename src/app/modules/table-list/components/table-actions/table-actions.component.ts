import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent implements OnInit {
  @Output('edit') editEvent = new EventEmitter()
  @Output('view') viewEvent = new EventEmitter()
  @Output('delete') deleteEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
