import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirerSignUpComponent } from './hirer-sign-up.component';

describe('HirerSignUpComponent', () => {
  let component: HirerSignUpComponent;
  let fixture: ComponentFixture<HirerSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HirerSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HirerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
