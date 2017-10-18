import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AuthServService } from './auth-serv.service';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey:"AIzaSyB8sCm1r_h6BvGUyrBYCS29nY0hV9JQ4do",
      authDomain:"galapp-d2847.firebaseapp.com",
      databaseURL:"https://galapp-d2847.firebaseio.com"
    });
  }

  @Input('false') connected: boolean;

  unshowForm() {
    console.log('yes');
    var user = firebase.auth().currentUser;
    if (user) {
      console.log(user);
      return this.connected = true;
  } else {
      return this.connected = false;
    }
  }
  title='app works!';
}
