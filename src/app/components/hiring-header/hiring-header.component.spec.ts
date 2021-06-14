import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringHeaderComponent } from './hiring-header.component';

describe('HiringHeaderComponent', () => {
  let component: HiringHeaderComponent;
  let fixture: ComponentFixture<HiringHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
