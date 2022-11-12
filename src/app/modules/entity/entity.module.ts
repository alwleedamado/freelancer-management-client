import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleViewToolbarComponent } from './components/single-view-toolbar/single-view-toolbar.component';
import { CoreModule } from 'core/core.module';



@NgModule({
  declarations: [
    SingleViewToolbarComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    SingleViewToolbarComponent
  ]
})
export class EntityModule { }
