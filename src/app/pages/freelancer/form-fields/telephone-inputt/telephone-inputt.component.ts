import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Telephone } from 'pages/freelancer/models/telephone';
import { DropdownItem } from 'primeng/dropdown';
import { BaseControlalueAccessor } from 'utils/helpers/base-control-value-accessor';
import { PhoneType } from 'freelancer/models/phone-type'
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-telephone-inputt',
  templateUrl: './telephone-inputt.component.html',
  styleUrls: ['./telephone-inputt.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TelephoneInputtComponent),
      multi: true
    }
  ]
})
export class TelephoneInputtComponent implements ControlValueAccessor, OnInit {
  PhoneType = PhoneType;
  public readonly phoneTypeControl = new FormControl();
  public readonly phoneNumberControl = new FormControl()

  ngOnInit(): void {
    combineLatest([
      this.phoneTypeControl.valueChanges,
      this.phoneNumberControl.valueChanges]
    ).subscribe(([phoneType, telephoneNumber]) => {
      const value = {
        phoneType: phoneType.code,
        telephoneNumber
      }
      this.onChange(value)
      this.onTouch(value)
    })
  }

  onChange = (val) => { }
  onTouch = (val) => { }
  writeValue(obj: any): void {
    if (obj) {
      this.phoneNumberControl.setValue(obj.telephoneNumber)
      this.phoneTypeControl.setValue({ name: obj.phoneType, code: obj.phoneType })
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.phoneTypeControl.disable()
      this.phoneNumberControl.disable()
    } else {
      this.phoneTypeControl.enable()
      this.phoneNumberControl.enable()
    }
  }
}
