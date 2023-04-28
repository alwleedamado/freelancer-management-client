import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { SpecialityType } from 'pages/freelancer/models/speciality-type';
import { SpecialityTypeActoins, SpecialityTypeDataSource, SpecialityTypeSelectors } from 'pages/freelancer/state/speciality-type';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { DefaultListView } from 'utils/base-components/list/default-list-view';
import { NgrxDataSource } from 'utils/ngrx/ngrx.datasource';
import { SpecialityFormComponent } from '../speciality-form/speciality-type-form.component';

@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.scss']
})
export class SpecialityListComponent extends DefaultListView<SpecialityType> {
  viewParts: any[];
  formEditTitle: string = "Edit Speciality Type";
  formAddTitle: string = "Add New Specaility Type";
  title: string = 'Speciality Types';
  columns: string[];
  dataSource: NgrxDataSource<SpecialityType>;

  constructor(store: Store<AppState>, layoutUtils: LayoutUtilsService) {
    super(layoutUtils, SpecialityFormComponent, store, SpecialityTypeActoins, SpecialityTypeSelectors)
    this.dataSource = new SpecialityTypeDataSource(store)
  }
}
