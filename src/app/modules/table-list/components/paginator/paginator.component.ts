import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPageState, PageSizes } from 'core/models';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() paginator: IPageState;
  @Input() isLoading;
  @Input() pageSizes: number[] = PageSizes;

  @Output() paginate: EventEmitter<IPageState> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }


  pageChange(num: number) {
    this.paginator.pageNumber = num;
    this.paginate.emit(this.paginator);

  }

  sizeChange() {
    this.paginator.pageSize = +this.paginator.pageSize;
    this.paginator.pageNumber = 1;
    this.paginate.emit(this.paginator);
  }

  get paginationText() {
    // this.paginator.pageNumber = this.paginator.pageNumber > 0 ? this.paginator.pageNumber : 1 // if shit got weird uncomment this   

    if (this.paginator.total == 0) {
      if (!this.isLoading)
        return 'COMMON.PAGINATOR_NO_DATA';
      else {
        return 'COMMON.LOADING';
      }
    }

    let lastRowCount = this.paginator.pageNumber * this.paginator.pageSize

    // handle the case when last page has less items than the page size
    lastRowCount = lastRowCount > this.paginator.total ? this.paginator.total : lastRowCount

    return this.paginator.pageSize == 1 ?
      `COMMON.PAGINATOR_ITEMS_OF` :
      `COMMON.PAGINATOR_ITEMS_FROM_TO`
  }

  get translationParam() {
    let lastRowCount = this.paginator.pageNumber * this.paginator.pageSize
    let firstRowCount = lastRowCount - this.paginator.pageSize + 1

    return { firstRowCount, lastRowCount, total: this.paginator.total }
  }
}
