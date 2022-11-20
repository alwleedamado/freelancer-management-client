import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
})
export class PromptComponent implements OnInit {
  @Input() title: string = "Confirm"
  @Input() message: string = "Are You Sure";

  @Input() okButtonLabel: string = "Yes";
  @Input() cancelButtonLabel: string = 'No'

  @Input() okButtonClass: string = 'p-button-text'
  @Input() cancelButtonClass: string = 'p-button-text'

  @Input() okButtonIcon = 'pi pi-chek'
  @Input() cancelButtonIcon = 'pi pi-times'

  constructor(private ref: DynamicDialogRef,
    private config: DynamicDialogConfig) { }

  close(res: boolean) {
    this.ref.close(res)
  }

  ngOnInit(): void {
    this.config && Object.keys(this.config).forEach(key => this[key] = this.config[key])
  }
}
