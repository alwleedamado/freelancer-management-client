import { Freelancer } from './models/freelancer';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducres } from 'freelancer/state/freelancer.base.state';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ChipModule } from 'primeng/chip';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'shared/shared.module';
import { AddSpecialityFormComponent } from './components/freelancer/add-speciality-form/add-speciality-form.component';
import { FreelancerFormComponent } from './components/freelancer/freelancer-form/freelancer-form.component';
import { FreelancerListComponent } from './components/freelancer/freelancer-list/freelancer-list.component';
import { FreelancerSingleDetailComponent } from './components/freelancer/freelancer-single-detail/freelancer-single-detail.component';
import { FreelancerViewComponent } from './components/freelancer/freelancer-view/freelancer-view.component';
import { SpecialityFormComponent } from './components/speciality/speciality-form/speciality-type-form.component';
import { SpecialityListComponent } from './components/speciality/speciality-list/speciality-list.component';
import { FreelancerFormFieldsModule } from './form-fields/form-fields.module';
import { FreelancerBaseComponent } from './freelancer-base.component';
import { statics } from './freelancer.statics';
import { FreelancerEffects } from './state/freelancer/freelancer.effects';
import { SpecialityTypeEffects } from './state/speciality-type/speciality-type.effects';




@NgModule({
  declarations: [
    FreelancerListComponent,
    FreelancerFormComponent,
    FreelancerViewComponent,
    FreelancerSingleDetailComponent,
    SpecialityListComponent,
    SpecialityFormComponent,
    AddSpecialityFormComponent,
    FreelancerBaseComponent
  ],
  imports: [
    SharedModule,
    ChipModule,
    StoreModule.forFeature(statics.moduleName, reducres),
    EffectsModule.forFeature([
      FreelancerEffects,
      SpecialityTypeEffects,
    ]),
    RouterModule.forChild([
      {
        path: '', component: FreelancerBaseComponent,
        children: [
          { path: '', component: FreelancerListComponent },
          { path: `view/:id`, component: FreelancerViewComponent },
          { path: statics.urls.SpecialityType, component: SpecialityListComponent }
        ]
      }
    ]),
    FreelancerFormFieldsModule,
    ToastModule,
    MessageModule,
    AutoCompleteModule
  ]
})
export class FreelancerModule {

}
