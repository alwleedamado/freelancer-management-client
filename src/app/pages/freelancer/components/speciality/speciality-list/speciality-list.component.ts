import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { Speciality } from 'pages/freelancer/models/speciality';
import { SpecialityActoins, SpecialitySelectors } from 'pages/freelancer/state/speciality';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { DefaultListView } from 'utils/base-components/list/default-list-view';
import { NgrxDataSource } from 'utils/ngrx/ngrx.datasource';
import { SpecialityFormComponent } from '../speciality-form/speciality-form.component';

@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.scss']
})
export class SpecialityListComponent extends DefaultListView<Speciality> {
  viewParts: any[];
  formEditTitle: string;
  formAddTitle: string;
  title: string;
  columns: string[];
  dataSource: NgrxDataSource<Speciality>;

  constructor(store: Store<AppState>, layoutUtils: LayoutUtilsService) {
    super(layoutUtils, SpecialityFormComponent, store, SpecialityActoins, SpecialitySelectors)
  }
}
