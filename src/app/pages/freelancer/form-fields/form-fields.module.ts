import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';
import { TelephoneInputComponent } from './telephone-input/telephone-input.component';
import { GenderInputComponent } from './gender-input/gender-input.component';
import { FreelancerInputComponent } from './flreelancer-input/flreelancer-input.component';
import { SpecialityTypeInputComponent } from './speciality-type-input/speciality-type-input.component';
import { AutoCompleteModule } from 'primeng/autocomplete';



@NgModule({
  declarations: [
    TelephoneInputComponent,
    GenderInputComponent,
    FreelancerInputComponent,
    SpecialityTypeInputComponent
  ],
  imports: [
    CoreModule,
    AutoCompleteModule
  ],
  exports: [
    TelephoneInputComponent,
    GenderInputComponent,
    SpecialityTypeInputComponent,
    FreelancerInputComponent
  ]
})
export class FreelancerFormFieldsModule { }
