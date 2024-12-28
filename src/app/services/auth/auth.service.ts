import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { User } from '../../interfaces/user';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token=new BehaviorSubject('');
  constructor(private firebaseService: FirebaseService) {}

  signUp(email: string, password: string, username: string): Observable<void> {
    return from(this.firebaseService.signUp(email, password)).pipe(
      switchMap((userCredential) => {
        const user = userCredential.user;
        if (user) {
          console.log('inseide signup')
          return from(this.firebaseService.setUserData(user.uid, {
            email: user.email || '',
            username,
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
}
