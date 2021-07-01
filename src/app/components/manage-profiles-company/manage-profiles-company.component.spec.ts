import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProfilesCompanyComponent } from './manage-profiles-company.component';

describe('ManageProfilesCompanyComponent', () => {
  let component: ManageProfilesCompanyComponent;
  let fixture: ComponentFixture<ManageProfilesCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProfilesCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProfilesCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
