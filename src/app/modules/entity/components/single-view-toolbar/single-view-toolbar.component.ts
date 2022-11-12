import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-view-toolbar',
  templateUrl: './single-view-toolbar.component.html',
  styleUrls: ['./single-view-toolbar.component.scss']
})
export class SingleViewToolbarComponent implements OnInit {
  @Output() edit = new EventEmitter()
  @Output() delete = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

}
