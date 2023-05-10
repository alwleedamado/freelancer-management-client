import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';
import { TelephoneInputComponent } from './telephone-input/telephone-input.component';
import { GenderInputComponent } from './gender-input/gender-input.component';
import { FlreelancerInputComponent } from './flreelancer-input/flreelancer-input.component';
import { SpecialityTypeInputComponent } from './speciality-type-input/speciality-type-input.component';



@NgModule({
  declarations: [
    TelephoneInputComponent,
    GenderInputComponent,
    FlreelancerInputComponent,
    SpecialityTypeInputComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    TelephoneInputComponent,
    GenderInputComponent,
    SpecialityTypeInputComponent
  ]
})
export class FormFieldsModule { }
