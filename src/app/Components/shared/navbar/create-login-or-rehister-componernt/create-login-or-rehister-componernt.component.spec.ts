import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoginOrRehisterComponerntComponent } from './create-login-or-rehister-componernt.component';

describe('CreateLoginOrRehisterComponerntComponent', () => {
  let component: CreateLoginOrRehisterComponerntComponent;
  let fixture: ComponentFixture<CreateLoginOrRehisterComponerntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateLoginOrRehisterComponerntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLoginOrRehisterComponerntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
