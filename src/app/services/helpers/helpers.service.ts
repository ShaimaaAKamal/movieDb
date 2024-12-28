import { Injectable } from '@angular/core';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  setTokenTolocalStoarge(token:string){
    localStorage.setItem('token',token);
  }

  setUserDataTolocalStoarge(userData:User){
    localStorage.setItem('userData',JSON.stringify(userData));
  }

  getTokenFromlocalStoarge():string{
     return JSON.stringify(localStorage.getItem('token'));
  
  }

  getUserDataFromlocalStoarge():User{
    return JSON.parse(JSON.stringify(localStorage.getItem('userData')));
  }


}
