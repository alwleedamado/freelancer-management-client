import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';
import { BaseFormInputsModule } from 'modules/base-form-inputs/base-form-inputs.module';
import { EntityModule } from 'modules/entity/entity.module';
import { TableListModule } from 'modules/table-list/table-list.module';

import { DynamicDialogModule } from 'primeng/dynamicdialog'
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    DynamicDialogModule,
    ToastModule
  ],
  exports: [
    CoreModule,
    ToastModule,
    TableListModule,
    BaseFormInputsModule,
    EntityModule

  ]
})
export class SharedModule { }
