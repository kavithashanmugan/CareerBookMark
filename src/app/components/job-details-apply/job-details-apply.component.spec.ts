import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsApplyComponent } from './job-details-apply.component';

describe('JobDetailsApplyComponent', () => {
  let component: JobDetailsApplyComponent;
  let fixture: ComponentFixture<JobDetailsApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailsApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
