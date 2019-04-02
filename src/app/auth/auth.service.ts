import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate([ '/' ]);
          this.getAndSetToken();
          console.log(response);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logoutUser() {
    this.router.navigate([ '/' ]);
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    this.getAndSetToken();
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  private getAndSetToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
  }
}
