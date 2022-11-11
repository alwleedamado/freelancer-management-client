import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-view',
  templateUrl: './field-view.component.html',
  styleUrls: ['./field-view.component.scss']
})
export class FieldViewComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  @Input() valueClass: string;
  @Input() labelClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
