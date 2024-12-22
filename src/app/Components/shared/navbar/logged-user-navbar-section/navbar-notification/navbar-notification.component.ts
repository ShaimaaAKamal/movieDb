import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-notification',
  standalone: false,
  
  templateUrl: './navbar-notification.component.html',
  styleUrl: './navbar-notification.component.css'
})
export class NavbarNotificationComponent {
@Input()   NoOfNotifications:Number=0;
}
