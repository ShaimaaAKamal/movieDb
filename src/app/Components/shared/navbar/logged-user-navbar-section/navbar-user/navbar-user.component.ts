import { Component } from '@angular/core';
import { AuthService } from '../../../../../services/auth/auth.service';
import { User } from '../../../../../interfaces/user';

@Component({
  selector: 'app-navbar-user',
  standalone: false,
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent {
  username:string='unknown';
  constructor(private __AuthService:AuthService){
     this.__AuthService.user.subscribe({
        next:(user:any)=> {
        if(user) {
            this.username=user['username'] }
       else this.username='unknown';

          },
    })
  }


logout(){
  this.__AuthService.Logout();
}
}
