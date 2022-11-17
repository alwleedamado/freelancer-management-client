import { IngrxActions, IngrxSelectors } from "utils/models/ngrx";
import { NgrxDataSource } from "utils/ngrx/ngrx.datasource";

export interface IBaseLookupList<T> {
    dataSource: NgrxDataSource<T>;
    actions: IngrxActions<T>;
    selectors: IngrxSelectors<T>;
    label: string;
  }