import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerInputComponent } from './flreelancer-input.component';

describe('FreelancerInputComponent', () => {
  let component: FreelancerInputComponent;
  let fixture: ComponentFixture<FreelancerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
