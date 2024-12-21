import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedUserNavbarSectionComponent } from './logged-user-navbar-section.component';

describe('LoggedUserNavbarSectionComponent', () => {
  let component: LoggedUserNavbarSectionComponent;
  let fixture: ComponentFixture<LoggedUserNavbarSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoggedUserNavbarSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedUserNavbarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
