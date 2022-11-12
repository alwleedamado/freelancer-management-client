import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';
import { BaseFormControlsModule } from 'modules/base-form-controls/base-form-controls.module';
import { EntityModule } from 'modules/entity/entity.module';
import { TableListModule } from 'modules/table-list/table-list.module';

import {DynamicDialogModule} from 'primeng/dynamicdialog'
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    DynamicDialogModule,
    ToastModule
  ],
  exports:[
    CoreModule,
    TableListModule,
    BaseFormControlsModule,
    EntityModule

  ]
})
export class SharedModule { }
