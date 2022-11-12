import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleViewToolbarComponent } from './single-view-toolbar.component';

describe('SingleViewToolbarComponent', () => {
  let component: SingleViewToolbarComponent;
  let fixture: ComponentFixture<SingleViewToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleViewToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleViewToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
