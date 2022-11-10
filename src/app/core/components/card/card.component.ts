import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  @Output('close') close = new EventEmitter()
  showCloseButton;
  constructor() { }

  ngOnInit(): void {
    this.showCloseButton = this.close.observers.length > 0
    console.log(this.showCloseButton)
  }

}
