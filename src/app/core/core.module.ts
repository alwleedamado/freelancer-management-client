import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from "primeng/autocomplete";
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { BaseFormControlsModule } from 'modules/base-form-controls/base-form-controls.module';
import { FieldViewComponent } from './components/field-view/field-view.component';

@NgModule({
  declarations: [
    CardComponent,
    PromptComponent,
    FormFooterComponent,
    // Pipes
    EnumToArrayPipe,
    FieldViewComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Prome modules
    InputTextModule,
    ButtonModule,
    DropdownModule,
    AutoCompleteModule,
    // Pipes

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Prime modules
    TableModule,
    ButtonModule,
    DynamicDialogModule,
    PaginatorModule,
    InputTextModule,

    // Components
    CardComponent,
    PromptComponent,
    FormFooterComponent,
    FieldViewComponent,

    // Pipes
    EnumToArrayPipe

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
