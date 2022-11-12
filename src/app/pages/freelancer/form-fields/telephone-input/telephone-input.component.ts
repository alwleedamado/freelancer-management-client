import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PhoneType } from 'freelancer/models/phone-type';
import { combineLatest, filter } from 'rxjs';

@Component({
  selector: 'app-telephone-input',
  templateUrl: './telephone-input.component.html',
  styleUrls: ['./telephone-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TelephoneInputComponent),
      multi: true
    }
  ]
})
export class TelephoneInputComponent implements ControlValueAccessor, OnInit {
  PhoneType = PhoneType;
  public readonly phoneTypeControl = new FormControl();
  public readonly phoneNumberControl = new FormControl()

  ngOnInit(): void {
    combineLatest([
      this.phoneTypeControl.valueChanges.pipe(filter(e => e)),
      this.phoneNumberControl.valueChanges.pipe(filter(e => e))]
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
    } else {
      this.phoneNumberControl.reset()
      this.phoneTypeControl.reset()
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
