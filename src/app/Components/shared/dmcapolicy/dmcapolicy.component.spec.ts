import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMCAPolicyComponent } from './dmcapolicy.component';

describe('DMCAPolicyComponent', () => {
  let component: DMCAPolicyComponent;
  let fixture: ComponentFixture<DMCAPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DMCAPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DMCAPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
