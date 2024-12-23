import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePrefrenceComponent } from './language-prefrence.component';

describe('LanguagePrefrenceComponent', () => {
  let component: LanguagePrefrenceComponent;
  let fixture: ComponentFixture<LanguagePrefrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguagePrefrenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagePrefrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
