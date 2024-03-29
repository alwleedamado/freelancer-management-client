import { NgModule } from '@angular/core';
import { TableCssDirective } from './directives/table-css.directive';

import { CoreModule } from 'core/core.module';
import { ListToolbarComponent } from './components/list-toolbar/list-toolbar.component';
import { TableActionsComponent } from './components/table-actions/table-actions.component';
import { TablePaginatorComponent } from './components/table-paginator/table-paginator.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [
    TableCssDirective,
    ListToolbarComponent,
    TableActionsComponent,
    TablePaginatorComponent,
  ],
  imports: [
    CoreModule,
    ProgressSpinnerModule

  ],
  exports: [
    TableCssDirective,
    ListToolbarComponent,
    TableActionsComponent,
    TablePaginatorComponent
  ]
})
export class TableListModule { }
