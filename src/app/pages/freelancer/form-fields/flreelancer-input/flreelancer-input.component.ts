import { Component, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FreelancerService } from 'pages/freelancer/services/freelancer.service';
import { Observable } from 'rxjs';
import { dropdownItem } from 'shared/models/dropdown';
import { BaseautoCompleteCVA } from 'utils/helpers/base-autocomplete';
import { BaseControlalueAccessor } from 'utils/helpers/base-control-value-accessor';

@Component({
  selector: 'app-flreelancer-input',
  templateUrl: './flreelancer-input.component.html',
  styleUrls: ['./flreelancer-input.component.scss']
})
export class FreelancerInputComponent extends BaseControlalueAccessor {
  @Input() specialityTypeId: string;
  options$: Observable<dropdownItem[]>
  constructor(@Optional() @Self() ngControl: NgControl, private service: FreelancerService) {
    super(ngControl)
  }
  fillData(query: string) {
    if (!this.specialityTypeId)
      this.options$ = this.service.typeahead(query);
    else
      this.options$ = this.service.getBySpecialityType(this.specialityTypeId, query)
  }
}