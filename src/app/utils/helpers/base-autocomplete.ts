import { OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseControlalueAccessor } from "./base-control-value-accessor";
import { NgControl } from '@angular/forms';

@Injectable()
export abstract class BaseautoCompleteCVA extends BaseControlalueAccessor implements OnInit {
    keyProperty: string = 'id';
    displayProperty: string = 'name';
    suggestions$: Observable<any>
    _autoCompleteValue: any;
    constructor(ngCongrol: NgControl) {
        super(ngCongrol)
    }
    get autocompleteValue(): any {
        return this._autoCompleteValue;
    }
    set autocompleteValue(val: any) {
        this._autoCompleteValue = val;
        if (!val?.hasOwnProperty(this.keyProperty))
            throw new Error(`Auto complete value has no such property named ${this.keyProperty}`)
        this.value = val[this.keyProperty]
    }
    override set value(val: any) {
        if (val && val.hasOwnProperty(this.keyProperty))
            super.value = val[this.keyProperty]
    }

    override get value() {
        return this.val;
    }
    abstract fillData(query: string): void;

    ngOnInit(): void {
        this.suggestions$?.subscribe((options: any[]) => {
            if (options) {
                if (Object.toString.call(this.val) == '[object Oject]') {
                    const option = options.find(x => x[this.keyProperty] == this.val)
                    if (option)
                        this.autocompleteValue = option;

                }
            }
        })
    }
}