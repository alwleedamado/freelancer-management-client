import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPageState } from 'core/models';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss']
})
export class TablePaginatorComponent implements OnInit {

  @Input() pageState: IPageState;
  @Input() loading: boolean;
  @Output('pagenate') pageChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  pageniate(event) {
    this.pageChanged.emit({
      pageNumber: event.page,
      pageSize: event.rows
    })
  }
}
