import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'shared/shared.module';
import { FreelancerFormComponent } from './components/freelancer/freelancer-form/freelancer-form.component';
import { FreelancerListComponent } from './components/freelancer/freelancer-list/freelancer-list.component';
import { FreelancerSingleDetailComponent } from './components/freelancer/freelancer-single-detail/freelancer-single-detail.component';
import { FreelancerViewComponent } from './components/freelancer/freelancer-view/freelancer-view.component';
import { statics } from './freelancer.statics';
import { FreelancerEffects } from './state/freelancer/freelancer.effects';
import { reducres } from 'freelancer/state/freelancer.base.state'
import { FormFieldsModule } from './form-fields/form-fields.module';
import { SpecialityListComponent } from './components/speciality/speciality-list/speciality-list.component';
import { SpecialityFormComponent } from './components/speciality/speciality-form/speciality-form.component';
import { ChipModule } from 'primeng/chip';


@NgModule({
  declarations: [
    FreelancerListComponent,
    FreelancerFormComponent,
    FreelancerViewComponent,
    FreelancerSingleDetailComponent,
    SpecialityListComponent,
    SpecialityFormComponent
  ],
  imports: [
    SharedModule,
    ChipModule,
    StoreModule.forFeature(statics.moduleName, reducres),
    EffectsModule.forFeature([
      FreelancerEffects
    ]),
    RouterModule.forChild([
      { path: '', component: FreelancerListComponent },
      { path: 'view/:id', component: FreelancerViewComponent }
    ]),
    FormFieldsModule
  ]
})
export class FreelancerModule { }
