import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AuthServService } from './auth-serv.service';
import { routerTransition } from './router.animations';

const firebaseConfig = {
  apiKey: "AIzaSyB8sCm1r_h6BvGUyrBYCS29nY0hV9JQ4do",
  authDomain: "galapp-d2847.firebaseapp.com",
  databaseURL: "https://galapp-d2847.firebaseio.com",
  projectId: "galapp-d2847",
  storageBucket: "",
  messagingSenderId: "851937489645"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  // constructor(public authServService: AuthServService) {}

  public loggedIn: boolean;

  ngOnInit() {
    // TODO: trouver comment passer ca ailleurs qu'ici et que ca marche car besoin de faire disparaitre le form
    firebase.initializeApp(firebaseConfig);
  }

  // ngAfterViewChecked() {
  //   this.unshowForm()
  // }

  // unshowForm() {
  //   console.log('yes')
  //   this.authServService.isUserLoggedIn().then(function(res){
  //     this.loggedIn = res
  //   })
  //   // var loggedIn = this.authServService.
  //   // console.log(loggedIn)
  // }

  title = 'app works!'
}
