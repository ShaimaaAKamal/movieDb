import { Component } from '@angular/core';


@Component({
  selector: 'app-logged-user-navbar',
  standalone: false,
  
  templateUrl: './logged-user-navbar-section.component.html',
  styleUrl: './logged-user-navbar-section.component.css'
})
export class LoggedUserNavbarSectionComponent {
  NoOfNotifications:Number=0;

}
