import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';
import { TelephoneInputtComponent } from './telephone-inputt/telephone-inputt.component';



@NgModule({
  declarations: [
    TelephoneInputtComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    TelephoneInputtComponent
  ]
})
export class FormFieldsModule { }
