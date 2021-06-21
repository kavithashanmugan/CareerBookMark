import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsCompanyComponent } from './job-details-company.component';

describe('JobDetailsCompanyComponent', () => {
  let component: JobDetailsCompanyComponent;
  let fixture: ComponentFixture<JobDetailsCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailsCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
