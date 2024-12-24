import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private auth: AngularFireAuth) {}

  // Register a user
  async register(email: string, password: string) {
    return await this.auth.createUserWithEmailAndPassword(email, password);
  }

  // Login a user
  async login(email: string, password: string) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  // Logout a user
  async logout() {
    return await this.auth.signOut();
  }

  // Get the current user
  getCurrentUser() {
    return this.auth.authState;
  }
}