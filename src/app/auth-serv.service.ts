import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { RouterModule, Routes, Router } from '@angular/router';
import { routing } from './app.routes';

@Injectable()
export class AuthServService {
  authState: any = null;

  constructor(private router: Router) {
    this.authState = firebase.auth().currentUser;
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

  // Promise
  isUserLoggedIn() {
    return new Promise (function(resolve, reject) {
      if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  }

  // Sign Up
  sUpFunc(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.sendEmailVerification()
        this.router.navigate(['/signin'], 'signin')
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  // Sign In
  sInFunc(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('yeah')
        this.router.navigate(['/home'], 'home')
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  // Sign Out
  signOut(): void {
    firebase.auth().signOut()
    this.router.navigate(['/'])
  }

  // Email Verification
  sendEmailVerification() {
    var user = firebase.auth().currentUser
    user.sendEmailVerification().then(function() {
      console.log('email sent')
    }).catch(function(error) {
      console.log(error)
    })
  }
  //   // var user = firebase.auth().currentUser;
  //   // console.log(user);
  //   // if (user) {
  //   //   user.updateProfile({
  //   //     displayName: displayName,
  //   //     photoURL: photoURL
  //   //   }).catch(function(error) {
  //   //     var errorCode = error['code'],
  //   //         errorMessage =  error.message;
  //   //     alert(errorMessage);
  //   //     alert(errorCode)
  //   //   });
  //   // } else {
  //   //   // No user is signed in.
  //   // }
  // }
}
