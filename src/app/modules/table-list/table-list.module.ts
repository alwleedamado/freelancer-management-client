import { NgModule } from '@angular/core';
import { TableCssDirective } from './directives/table-css.directive';

import { CdkTableModule } from '@angular/cdk/table';
import { CoreModule } from 'core/core.module';
import { ListToolbarComponent } from './components/list-toolbar/list-toolbar.component';
import { TableActionsComponent } from './components/table-actions/table-actions.component';
import {PaginatorComponent} from './components/paginator/paginator.component'
import { NgPagination } from './components/paginator/ng-pagination/ng-pagination.component';
@NgModule({
  declarations: [
    TableCssDirective,
    ListToolbarComponent,
    TableActionsComponent,
    PaginatorComponent,
    NgPagination
  ],
  imports: [
    CoreModule,
    CdkTableModule
  ],
  exports: [
    CdkTableModule,
    TableCssDirective,
    ListToolbarComponent,
    TableActionsComponent,
    PaginatorComponent,
  ]
})
export class TableListModule { }
