import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './compoments/team-list/team-list.component';
import { TeamViewComponent } from './compoments/team-view/team-view.component';
import { TeamSingleDetailComponent } from './compoments/team-single-detail/team-single-detail.component';
import { TeamMembersListComponent } from './compoments/team-members-list/team-members-list.component';
import { TeamMemberFormComponent } from './compoments/team-member-form/team-member-form.component';
import { RouterModule } from '@angular/router';
import { statics } from './team.statics';
import { StoreModule } from '@ngrx/store';
import { reducres } from './state/team.base.state';
import { EffectsModule } from '@ngrx/effects';
import { TeamEffects } from './state/team/team.effects';
import { SharedModule } from 'shared/shared.module';
import { TeamFormComponent } from './compoments/team-form/team-form.component';
import { FreelancerFormFieldsModule } from 'pages/freelancer/form-fields/form-fields.module';



@NgModule({
  declarations: [
    TeamListComponent,
    TeamFormComponent,
    TeamViewComponent,
    TeamSingleDetailComponent,
    TeamMembersListComponent,
    TeamMemberFormComponent
  ],
  imports: [
    SharedModule,
    FreelancerFormFieldsModule,
    StoreModule.forFeature(statics.moduleName, reducres),
    EffectsModule.forFeature([
      TeamEffects
    ]),
    RouterModule.forChild([
      { path: '', component: TeamListComponent },
      {path:'view/:id', component: TeamViewComponent}
    ])
  ]
})
export class TeamModule { }
