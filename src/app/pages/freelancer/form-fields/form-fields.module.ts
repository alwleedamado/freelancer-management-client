import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';
import { TelephoneInputComponent } from './telephone-input/telephone-input.component';
import { GenderInputComponent } from './gender-input/gender-input.component';



@NgModule({
  declarations: [
    TelephoneInputComponent,
    GenderInputComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    TelephoneInputComponent,
    GenderInputComponent
  ]
})
export class FormFieldsModule { }
