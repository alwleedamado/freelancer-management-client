import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneInputtComponent } from './telephone-inputt.component';

describe('TelephoneInputtComponent', () => {
  let component: TelephoneInputtComponent;
  let fixture: ComponentFixture<TelephoneInputtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneInputtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneInputtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
