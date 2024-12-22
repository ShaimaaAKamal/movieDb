import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTVShowComponent } from './add-new-tvshow.component';

describe('AddNewTVShowComponent', () => {
  let component: AddNewTVShowComponent;
  let fixture: ComponentFixture<AddNewTVShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewTVShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewTVShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
