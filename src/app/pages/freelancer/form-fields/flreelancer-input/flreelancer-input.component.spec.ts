import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlreelancerInputComponent } from './flreelancer-input.component';

describe('FlreelancerInputComponent', () => {
  let component: FlreelancerInputComponent;
  let fixture: ComponentFixture<FlreelancerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlreelancerInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlreelancerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
