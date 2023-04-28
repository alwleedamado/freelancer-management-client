import { of } from 'rxjs';
import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { SpecialityType } from 'pages/freelancer/models/speciality-type';
import { SpecialityTypeService } from 'pages/freelancer/services/speciality-type.service';
import { Observable } from 'rxjs';
import { dropdownItem } from 'shared/models/dropdown';
import { BaseControlalueAccessor } from 'utils/helpers/base-control-value-accessor';

@Component({
  selector: 'app-speciality-type-input',
  templateUrl: './speciality-type-input.component.html',
  styleUrls: ['./speciality-type-input.component.scss']
})
export class SpecialityTypeInputComponent  extends BaseControlalueAccessor implements OnInit {
  options$: Observable<dropdownItem[]> = of([])
  constructor(@Optional() @Self() ngControl: NgControl, private service: SpecialityTypeService) {
    super(ngControl)
   }
  ngOnInit(): void {
    this.options$ = this.service.getDdl();
  }
}
