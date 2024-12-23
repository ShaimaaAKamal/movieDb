import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APITermsOfUseComponent } from './apiterms-of-use.component';

describe('APITermsOfUseComponent', () => {
  let component: APITermsOfUseComponent;
  let fixture: ComponentFixture<APITermsOfUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [APITermsOfUseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APITermsOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
