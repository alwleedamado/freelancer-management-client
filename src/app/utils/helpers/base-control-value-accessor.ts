import { Injectable, OnDestroy } from "@angular/core"
import { AbstractControl, ControlValueAccessor, NgControl } from "@angular/forms"
import { Subscription } from "rxjs";

@Injectable()
export class BaseControlalueAccessor implements OnDestroy, ControlValueAccessor {

    componentActive = true;
    updateControl = true;
    isDisabled: boolean;

    subscription= Subscription.EMPTY;

    constructor(protected ngControl: NgControl = null) {

        if (this.ngControl != null)
            this.ngControl.valueAccessor = this;

    }

    public get formControl(): AbstractControl {
        return this.ngControl?.control
    }

    ngOnDestroy() {
        this.componentActive = false;
        if (this.subscription)
            this.subscription.unsubscribe();
    }

    onChange: any = () => { }
    onTouch: any = () => { }

    val: any = ""
    set value(val: any) {
        this.val = val
        this.update(val)
    }
    get value() {
        return this.val;
    }

    update(val) {
        if (this.updateControl) {
            this.onChange(val)
            this.onTouch(val)
        }
        else
            this.updateControl = true;

        this.valueChange();
    }

    writeValue(value: any) {
        this.updateControl = false;
        this.value = value
    }
    registerOnChange(fn: any) {
        this.onChange = fn
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn
    }


    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }


    //Handle Value Change inside the control, mainly to emmit the entire object instead of the Id in case of dropdown lists
    valueChange() {

    }


}