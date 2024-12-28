import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { HelpersService } from '../../../services/helpers/helpers.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
LoginFailed:boolean=false;
constructor(private __AuthService:AuthService,private __HelpersService:HelpersService,private __Router:Router){}
LoginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
})



 Login(LoginForm:FormGroup){
    this.__AuthService.signIn(LoginForm.get('email')?.value,LoginForm.get('password')?.value).subscribe({
      next: (userData:any)=>{
        this.LoginFailed=false;
        this.__HelpersService.setUserDataTolocalStoarge(userData);
        this.__AuthService.token.subscribe({
          next:(token)=>{
             this.__HelpersService.setTokenTolocalStoarge(token);
             this.__Router.navigate(['/Home']);
          }
        })
      },
      error:()=>{this.LoginFailed=true;},
    });
  }
  
  }


