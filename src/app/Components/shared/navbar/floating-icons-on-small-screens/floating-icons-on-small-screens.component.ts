import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-floating-icons-on-small-screens',
  standalone: false,
  
  templateUrl: './floating-icons-on-small-screens.component.html',
  styleUrl: './floating-icons-on-small-screens.component.css'
})
export class FloatingIconsOnSmallScreensComponent {
  @Input() loggedUser:boolean=false;
  @Input() smallScreen:boolean=true;
}
