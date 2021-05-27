import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringHomeComponent } from './hiring-home.component';

describe('HiringHomeComponent', () => {
  let component: HiringHomeComponent;
  let fixture: ComponentFixture<HiringHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
