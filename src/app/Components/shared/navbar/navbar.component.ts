import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
logged:boolean=false;
 smallScreen:boolean=true;
  constructor(private __AuthService:AuthService){
    this.__AuthService.user.subscribe({
        next:(user:User)=> {
        if(user) {
            this.logged=true;}
       else this.logged=false;

          },
    })
  }

 

}
