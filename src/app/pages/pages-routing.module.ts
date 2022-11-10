import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {statics as FreelancersStatics } from './freelancer/freelancer.statics'
@NgModule({
    imports: [RouterModule.forChild([
        { path: FreelancersStatics.urls.root, loadChildren: () => import('./freelancer/freelancer.module').then(m => m.FreelancerModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
