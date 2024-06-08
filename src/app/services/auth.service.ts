import {inject, Injectable, signal} from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
  updateProfile,
  user
} from "@angular/fire/auth";
import {from, Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAauth = inject(Auth)
  user$ = user(this.firebaseAauth)
  currentUserSig = signal<User | null | undefined>(undefined)


  register(email: string, username: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAauth,
      email,
      password
    ).then(response => updateProfile(response.user, {displayName: username}))
    return from(promise)
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAauth,
      email,
      password
    ).then(() => {
    })
    return from(promise)
  }

  logout():Observable<void>{
    const promise = signOut(this.firebaseAauth);
    return from(promise)
  }

}
