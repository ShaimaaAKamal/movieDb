import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendVerificationMailComponent } from './send-verification-mail.component';

describe('SendVerificationMailComponent', () => {
  let component: SendVerificationMailComponent;
  let fixture: ComponentFixture<SendVerificationMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendVerificationMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendVerificationMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
