import { OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

export interface IBaseForm extends OnInit, OnDestroy {

    id: string | number;
    componentActive: boolean;
    
    form: FormGroup
    loading$: Observable<boolean>
    
    title: string;

    createForm();
    save();
    formValue(): any;
    closeForm();
}