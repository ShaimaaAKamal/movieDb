import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMovieComponent } from './add-new-movie.component';

describe('AddNewMovieComponent', () => {
  let component: AddNewMovieComponent;
  let fixture: ComponentFixture<AddNewMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
