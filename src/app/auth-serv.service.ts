import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { RouterModule, Routes, Router } from '@angular/router';
import { routing } from './app.routes';

@Injectable()
export class AuthServService {
  constructor (public router: Router) {}

  public errorMessage: string;

  sUpFunc(displayName: string, photoURL: string, email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((res) => {
      this.sendEmailVerification();
      this.router.navigate(['/signin'], 'signin');
    })
    .catch(function(error) {
      var errorCode = error['code'],
          errorMessage =  error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.')
      } else if (errorCode == 'auth/email-already-in-use') {
        alert('Email already in use.')
      } else {
        alert(errorMessage)
      }
      console.log(error)

    });
    // var user = firebase.auth().currentUser;
    // console.log(user);
    // if (user) {
    //   user.updateProfile({
    //     displayName: displayName,
    //     photoURL: photoURL
    //   }).catch(function(error) {
    //     var errorCode = error['code'],
    //         errorMessage =  error.message;
    //     alert(errorMessage);
    //     alert(errorCode)
    //   });
    // } else {
    //   // No user is signed in.
    // }
  }
  sInFunc(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((user) => {
        if(user.emailVerified) {
          this.router.navigate(['/home'], 'home');
        } else {
           var errorMessage = "Verify your email";
           console.log(errorMessage);
          // Tell the user to have a look at its mailbox
        }
    })
    .catch(
    error => console.log(error)
    )
  }
  sendEmailVerification() {
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      console.log('email sent');
    }).catch(function(error) {
      console.log(error)
    })
  }

}
