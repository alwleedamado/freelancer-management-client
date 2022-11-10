import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-footer',
  templateUrl: './form-footer.component.html',
  styleUrls: ['./form-footer.component.scss']
})
export class FormFooterComponent implements OnInit {
  @Output('cancel') cancelEvent = new EventEmitter();
  @Output('save') saveEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  cancel() {debugger
    this.cancelEvent.emit()
  }
  save() {console.log('form footer save')
    this.saveEvent.emit()
  }
}
