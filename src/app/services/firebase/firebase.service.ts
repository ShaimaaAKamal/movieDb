import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import { environment } from '../../../environments/environment';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private db = getFirestore(initializeApp(environment.firebase));
  private auth = getAuth();

  constructor() {
    this.monitorAuthState();
  }

  monitorAuthState() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.setUserData(user.uid, {
          email: user.email || '',
          displayName: user.displayName || 'Anonymous',
          createdAt: new Date().toISOString(),
        }).then(() => console.log('User data saved to Firestore'));
      }
    });
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async setUserData(uid: string, data: any) {
    const userRef = doc(this.db, 'users', uid);
    await setDoc(userRef, data, { merge: true });
  }

  async fetchUserData(uid: string) {
    const userRef = doc(this.db, 'users', uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error('User document not found');
    }
  }

  async fetchUsers() {
    const usersCollection = collection(this.db, 'users');
    const snapshot = await getDocs(usersCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
}
