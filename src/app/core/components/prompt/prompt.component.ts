import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogConfig } from 'utils/models/dialog-config.model';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
})
export class PromptComponent implements OnInit {
  @Input() title: string = "Confirm"
  @Input() message: string = "Are You Sure";
  @Input() yesLabel: string = "Yes";
  @Input() noLabel: string = 'No'

  @Input() yesCssClass?: string
  @Input() noCssClass: string

  constructor(private ref: DynamicDialogRef,
    private config: DynamicDialogConfig) { }

  close(res: boolean) {
    this.ref.close(res)
  }

  ngOnInit(): void {
    this.config && Object.keys(this.config).forEach(key => this[key] = this.config[key])
  }

}
