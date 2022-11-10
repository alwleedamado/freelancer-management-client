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
import {reducres } from 'freelancer/state/freelancer.base.state'


@NgModule({
  declarations: [
    FreelancerListComponent,
    FreelancerFormComponent,
    FreelancerViewComponent,
    FreelancerSingleDetailComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(statics.moduleName, reducres),
    EffectsModule.forFeature([
      FreelancerEffects
    ]),
    RouterModule.forChild([
      {path: '', component: FreelancerListComponent}
    ])
  ]
})
export class FreelancerModule { }
