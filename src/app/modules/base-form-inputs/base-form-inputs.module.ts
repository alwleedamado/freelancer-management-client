import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'core/core.module';
import { FormFieldComponent } from './components/form-field/form-field.component';



@NgModule({
  declarations: [FormFieldComponent],
  imports: [
    CoreModule
  ],
  exports: [
    FormFieldComponent
  ]
})
export class BaseFormInputsModule { }
