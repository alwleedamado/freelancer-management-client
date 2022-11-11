import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControlalueAccessor } from 'utils/helpers/base-control-value-accessor';
import {Gender} from 'shared/models/gender'
@Component({
  selector: 'app-gender-input',
  templateUrl: './gender-input.component.html',
  styleUrls: ['./gender-input.component.scss']
})
export class GenderInputComponent extends BaseControlalueAccessor {
  Gender = Gender;
  constructor(ngControl: NgControl) {
    super(ngControl)
   }
}
