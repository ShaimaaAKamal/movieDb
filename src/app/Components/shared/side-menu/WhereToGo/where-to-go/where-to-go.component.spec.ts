import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToGoComponent } from './where-to-go.component';

describe('WhereToGoComponent', () => {
  let component: WhereToGoComponent;
  let fixture: ComponentFixture<WhereToGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhereToGoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereToGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
