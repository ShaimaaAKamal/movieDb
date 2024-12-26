import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 user$: Observable<User | null | undefined>;
 usersCollections:any;
  constructor(private afAuth: AngularFireAuth,private firestore: AngularFirestore, private zone: NgZone) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) =>
        user
          ? this.firestore.doc<User>(`users/${user.uid}`).valueChanges()
          : of(null)
      )
    );
    this.usersCollections=this.firestore.collection('users');
  }

signUp(email: string, password: string, username: string): Observable<void> {
  return from(
    this.afAuth.createUserWithEmailAndPassword(email, password).then(
      (credential) => {
        if (credential.user) {
          this.zone.run(() => {
            this.setUserData(credential.user, username,password);
          });
        }
      }
    )
  );
}


private setUserData(user: any,password:string,username?: string): void {
  try {
    const userRef = this.usersCollections.doc(user.uid);
    // Prepare the data to be updated
    const data: User = {
      uid: user.uid,
      email: user.email,
      username: username || 'Anonymous',
      password:password  
    };
    userRef.set(data, { merge: true })
      .then(() => {
        console.log('User data updated successfully');
      })
      .catch((error: any) => {
        console.error('Error updating user data:', error);
      });
  } catch (err) {
    console.error('Error inside updateUserData:', err);
  }
}

}
