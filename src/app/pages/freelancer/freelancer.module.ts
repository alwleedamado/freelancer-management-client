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
import { ChipModule } from 'primeng/chip';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { TeamFormComponent } from './components/team/team-form/team-form.component';
import { statics as FreelancersStatics } from 'freelancer/freelancer.statics'
import { SpecialityFormComponent } from './components/speciality/speciality-form/speciality-form.component';
import { SpecialityListComponent } from './components/speciality/speciality-list/speciality-list.component';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';


@NgModule({
  declarations: [
    FreelancerListComponent,
    FreelancerFormComponent,
    FreelancerViewComponent,
    FreelancerSingleDetailComponent,
    SpecialityListComponent,
    SpecialityFormComponent,
    TeamListComponent,
    TeamFormComponent
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
      { path: 'view/:id', component: FreelancerViewComponent },
      { path: FreelancersStatics.urls.Team, component: TeamListComponent },
      { path: FreelancersStatics.urls.SpecialityType, component: SpecialityListComponent }
    ]),
    FormFieldsModule,
    ToastModule,
    MessageModule
  ]
})
export class FreelancerModule { }
