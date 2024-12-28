import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { User } from '../../interfaces/user';
import { FirebaseService } from '../firebase/firebase.service';
import { Router } from '@angular/router';
import { HelpersService } from '../helpers/helpers.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token=new BehaviorSubject('');
  user:any=new BehaviorSubject(null);
  constructor(private firebaseService: FirebaseService,private __Router:Router,private __Helpers:HelpersService) {
    this.user.next(this.__Helpers.getUserDataFromlocalStoarge());
  }

  signUp(email: string, password: string, username: string): Observable<void> {
    return from(this.firebaseService.signUp(email, password)).pipe(
      switchMap((userCredential) => {
        const user = userCredential.user;
        if (user) {
          console.log('inseide signup')
          return from(this.firebaseService.setUserData(user.uid, {
            email: user.email || '',
            username,
            uid:user.uid,
            // Avoid storing passwords in the database
          }));
        } else {
          return throwError(() => new Error('User creation failed'));
        }
      }),
      catchError((error) => {
        console.error('Sign-up error:', error);
        return throwError(() => error);
      })
    );
  }

  signIn(email: string, password: string): Observable<any> {
    return from(this.firebaseService.signIn(email, password)).pipe(
      switchMap((userCredential) => {
        const user = userCredential.user;
        if (user) {
        user.getIdToken() .then((idToken) => {
              this.token.next(idToken);
            })
            .catch((error) => {
              console.error("Error getting token:", error);
            });;
          return this.firebaseService.fetchUserData(user.uid);
        } else {
          return throwError(() => new Error('User not found'));
        }
      }),
      catchError((error) => {
        console.error('Sign-in error:', error);
        return throwError(() => error);
      })
    );
  }

  Logout(): void {
    this.firebaseService.logout().subscribe({
      next: () => {
        console.log('in');
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        this.user.next(null);
        this.__Router.navigate(['Login']);
      },
      error: (err) => {
        console.error('Logout error:', err);
      },
    });
  }
}
