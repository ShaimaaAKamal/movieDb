import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-user',
  standalone: false,
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent {
User:any={name:"shaimaa kamal"};
logout(){
  console.log('logout');
}
}