// Fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/pagination/pagination-config.ts
import { Injectable } from '@angular/core';
import { defaultPageSize } from 'core/models';

/**
 * A configuration service for the [`NgPagination`](#/components/paginator/api#NgPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
@Injectable({ providedIn: 'root' })
export class NgPaginationConfig {
  disabled = false;
  boundaryLinks = false;
  directionLinks = true;
  ellipses = true;
  maxSize = 0;
  pageSize = defaultPageSize;
  rotate = false;
  size: 'sm' | 'lg';
}
