import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialityFormComponent } from './add-speciality-form.component';

describe('AddSpecialityFormComponent', () => {
  let component: AddSpecialityFormComponent;
  let fixture: ComponentFixture<AddSpecialityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecialityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSpecialityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
