import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
@Injectable()
export abstract class BaseDialog implements OnInit, OnDestroy {
    protected componentActive = true;

    constructor(protected ref: DynamicDialogRef, protected config: DynamicDialogConfig) { }
    
    abstract initializeComponent(): void;

    ngOnInit(): void {
        this.config?.data &&
            Object.keys(this.config?.data).forEach(key => this[key] = this.config.data[key])
        this.initializeComponent()

    }
    
    ngOnDestroy(): void {
        this.componentActive = false;
    }

    close() {
        this.ref.close()
    }
}