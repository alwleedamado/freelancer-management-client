import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';
import { TelephoneInputComponent } from './telephone-input/telephone-input.component';



@NgModule({
  declarations: [
    TelephoneInputComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    TelephoneInputComponent
  ]
})
export class FormFieldsModule { }
