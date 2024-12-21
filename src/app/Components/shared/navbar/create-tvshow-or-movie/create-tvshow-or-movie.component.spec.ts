import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTVshowOrMovieComponent } from './create-tvshow-or-movie.component';

describe('CreateTVshowOrMovieComponent', () => {
  let component: CreateTVshowOrMovieComponent;
  let fixture: ComponentFixture<CreateTVshowOrMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTVshowOrMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTVshowOrMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
