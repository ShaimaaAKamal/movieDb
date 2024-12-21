import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-tvshow-or-movie',
  standalone: false,
  
  templateUrl: './create-tvshow-or-movie.component.html',
  styleUrl: './create-tvshow-or-movie.component.css'
})
export class CreateTVshowOrMovieComponent {
 @Input() loggedUser:boolean=false;
}
