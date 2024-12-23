import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingIconsOnSmallScreensComponent } from './floating-icons-on-small-screens.component';

describe('FloatingIconsOnSmallScreensComponent', () => {
  let component: FloatingIconsOnSmallScreensComponent;
  let fixture: ComponentFixture<FloatingIconsOnSmallScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FloatingIconsOnSmallScreensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingIconsOnSmallScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
