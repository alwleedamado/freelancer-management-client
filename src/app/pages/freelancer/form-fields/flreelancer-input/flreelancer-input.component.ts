import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Freelancer } from 'pages/freelancer/models/freelancer';
import { FreelancerService } from 'pages/freelancer/services/freelancer.service';
import { Observable } from 'rxjs';
import { dropdownItem } from 'shared/models/dropdown';
import { BaseControlalueAccessor } from 'utils/helpers/base-control-value-accessor';

@Component({
  selector: 'app-flreelancer-input',
  templateUrl: './flreelancer-input.component.html',
  styleUrls: ['./flreelancer-input.component.scss']
})
export class FlreelancerInputComponent extends BaseControlalueAccessor {
  options$: Observable<dropdownItem[]>
  constructor(@Optional() @Self() ngControl: NgControl, private service: FreelancerService) {
    super(ngControl)
  }

  fillData(query: string) {
    this.options$ = this.service.typeahead(query);
  }
}