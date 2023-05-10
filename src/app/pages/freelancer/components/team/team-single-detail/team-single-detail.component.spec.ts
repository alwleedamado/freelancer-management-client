import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSingleDetailComponent } from './team-single-detail.component';

describe('TeamSingleDetailComponent', () => {
  let component: TeamSingleDetailComponent;
  let fixture: ComponentFixture<TeamSingleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamSingleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamSingleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
