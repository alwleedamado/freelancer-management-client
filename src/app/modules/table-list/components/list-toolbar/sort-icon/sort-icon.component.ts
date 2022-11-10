import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ISortState } from 'core/models';

@Component({
  selector: 'app-sort-icon',
  templateUrl: './sort-icon.component.html',
  styleUrls: ['./sort-icon.component.scss']
})
export class SortIconComponent implements OnInit, OnChanges {
  @Input() column: string;
  @Input() sortState: ISortState;


  get activeColumn() {
    return this.sortState.sortField
  }
  get activeDirection() {
    return this.sortState.sortOrder
  }


  @Output() sort: EventEmitter<ISortState> = new EventEmitter<ISortState>();


  get isActive() {
    return this.column === this.activeColumn;
  }

  constructor(private el: ElementRef) { }

  ngOnChanges(): void {
    const parent = this.el.nativeElement.parentElement;
    if (!parent) {
      return;
    }

    // Load css classes
    parent.classList.add('sortable');
    parent.classList.remove('text-primary');
    if (this.isActive) {
      parent.classList.add('text-primary');
    }
  }

  ngOnInit(): void {
    const parent = this.el.nativeElement.parentElement as Element;
    if (!parent) {
      return;
    }

    parent.addEventListener('click', () => {

      let newState: ISortState


      if (this.isActive) {
        //Asc
        if (this.activeDirection == "asc")
          newState = {
            sortField: this.column,
            sortOrder: "desc"
          }

        //Dsc
        else
          newState = {
            sortField: "",
            sortOrder: ""
          }
        //No Sort
      }
      else {
        newState = {
          sortField: this.column,
          sortOrder: "asc"
        }
      }

      this.sort.emit(newState);
    });
  }
}
