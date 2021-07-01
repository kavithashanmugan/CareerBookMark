import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMyJobsComponent } from './track-my-jobs.component';

describe('TrackMyJobsComponent', () => {
  let component: TrackMyJobsComponent;
  let fixture: ComponentFixture<TrackMyJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackMyJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
