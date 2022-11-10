import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptService } from './services/intercept.service';
import { PromptComponent } from './components/prompt/prompt.component';
import { CdkTableModule } from '@angular/cdk/table';
import { FormFooterComponent } from './components/form-footer/form-footer.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastService } from './services/toast.service';
import { MessageService } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    CardComponent,
    PromptComponent,
    FormFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DynamicDialogModule,
    PaginatorModule,
    // Components
    CardComponent,
    PromptComponent,
    FormFooterComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    DialogService,
    MessageService
  ]
})
export class CoreModule { }
