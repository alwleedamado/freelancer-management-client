import { NgModule } from '@angular/core';
import { CoreModule } from 'core/core.module';
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
    TableListModule
  ]
})
export class SharedModule { }
