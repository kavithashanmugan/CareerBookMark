import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyProfleComponent } from './create-company-profle.component';

describe('CreateCompanyProfleComponent', () => {
  let component: CreateCompanyProfleComponent;
  let fixture: ComponentFixture<CreateCompanyProfleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompanyProfleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompanyProfleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
