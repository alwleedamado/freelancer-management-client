import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerSingleDetailComponent } from './freelancer-single-detail.component';

describe('FreelancerSingleDetailComponent', () => {
  let component: FreelancerSingleDetailComponent;
  let fixture: ComponentFixture<FreelancerSingleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerSingleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerSingleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
