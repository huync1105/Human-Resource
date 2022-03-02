import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBtnComponent } from './nav-btn.component';

describe('NavBtnComponent', () => {
  let component: NavBtnComponent;
  let fixture: ComponentFixture<NavBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
