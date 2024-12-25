import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private __AuthService:AuthService){}
  RegisterForm:FormGroup=new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
    confirmPassword:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]),
  })

  SignUP(RegisterForm:FormGroup){
    let userEmail:string=(RegisterForm.get('email')?.value);
    let userPassword=RegisterForm.get('password')?.value;
    this.__AuthService.signUp(userEmail,userPassword, RegisterForm.get('username')?.value).subscribe({
      next:()=> console.log('registerted'),
      error: (err) => console.error('Registration error:', err),
    })
  }
  CancalRegisteration(){
    this.RegisterForm.reset();
  }
}
