import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityTypeInputComponent } from './speciality-type-input.component';

describe('SpecialityTypeInputComponent', () => {
  let component: SpecialityTypeInputComponent;
  let fixture: ComponentFixture<SpecialityTypeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialityTypeInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialityTypeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
