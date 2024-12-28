import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../app/services/auth/auth.service';
import { User } from '../../app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class guestGuard implements CanActivate {

  constructor(private __AuthService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.__AuthService.user.getValue());
       return this.__AuthService.user.subscribe({
        next:(user:User)=> {
          console.log(!user);
        if(!user) {
          return true;
      } else {
          this.router.navigate(['/Home']);
          return false;}
        },
     
    })
  }
}