import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPortfolioComponent } from './company-portfolio.component';

describe('CompanyPortfolioComponent', () => {
  let component: CompanyPortfolioComponent;
  let fixture: ComponentFixture<CompanyPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
