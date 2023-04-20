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
import { SpecialityFormComponent } from './components/speciality/speciality-form/speciality-type-form.component';
import { SpecialityListComponent } from './components/speciality/speciality-list/speciality-list.component';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectFormComponent } from './components/project/project-form/project-form.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TeamMembersListComponent } from './components/team/team-members-list/team-members-list.component';
import { TeamMemberFormComponent } from './components/team/team-member-form/team-member-form.component';
import { TeamViewComponent } from './components/team/team-view/team-view.component';
import { TeamSingleDetailComponent } from './components/team/team-single-detail/team-single-detail.component';
import { SpecialityTypeEffects } from './state/speciality-type/speciality-type.effects';
import { TeamEffects } from './state/team/team.effects';


@NgModule({
  declarations: [
    FreelancerListComponent,
    FreelancerFormComponent,
    FreelancerViewComponent,
    FreelancerSingleDetailComponent,
    SpecialityListComponent,
    SpecialityFormComponent,
    TeamListComponent,
    TeamFormComponent,
    ProjectListComponent,
    ProjectFormComponent,
    TeamMembersListComponent,
    TeamMemberFormComponent,
    TeamViewComponent,
    TeamSingleDetailComponent
  ],
  imports: [
    SharedModule,
    ChipModule,
    StoreModule.forFeature(statics.moduleName, reducres),
    EffectsModule.forFeature([
      FreelancerEffects,
      SpecialityTypeEffects,
      TeamEffects,
      
    ]),
    RouterModule.forChild([
      { path: '', component: FreelancerListComponent },
      { path: 'view/:id', component: FreelancerViewComponent },
      { path: FreelancersStatics.urls.Team, component: TeamListComponent },
      { path: FreelancersStatics.urls.SpecialityType, component: SpecialityListComponent },
      { path: FreelancersStatics.urls.Project, component: ProjectListComponent }

    ]),
    FormFieldsModule,
    ToastModule,
    MessageModule,
    AutoCompleteModule
  ]
})
export class FreelancerModule { }
