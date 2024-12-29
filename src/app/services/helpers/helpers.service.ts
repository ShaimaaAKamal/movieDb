import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';

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

   getUserDataFromLocalStorage(): User | null {
    const userData = localStorage.getItem('userData');
    if (userData !== null) {
      return JSON.parse(userData);
    }
    return null;
  }


}
