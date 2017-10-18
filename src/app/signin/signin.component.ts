import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { routing } from '../app.routes';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthServService } from '../auth-serv.service';
import * as firebase from 'firebase/app';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

class User {
  displayName: string;
  photoURL: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class SigninComponent implements OnInit {
  rForm: FormGroup;
  post:any;
  email:string = '';
  titleAlert:string = 'Email required';
  password:string = '';

  constructor(private authServService:AuthServService, private router: Router, private fb: FormBuilder) {
    this.rForm = fb.group({
      'email' : [null, Validators.required, Validators.pattern("[^ @]*@[^ @]*")],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
      'validate' : ''
    });
  }

  onSin(post, user: User) {
    user = new User();
    user.email = post.email;
    user.password = post.password;
    this.authServService.sInFunc(user.email, user.password);
  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('email').setValidators([Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
          this.titleAlert = 'Invalid email.'
        }
        else {
          this.rForm.get('email').setValidators(Validators.required);
        }
        this.rForm.get('email').updateValueAndValidity();
      });
  }

  // @Input() errorMessage: string;

  // onSin(form: NgForm, user: User) {
  //   user = new User();
  //   user.email = form.value.email;
  //   user.password = form.value.password;
  //   this.authServService.sInFunc(user.email, user.password);
  //   console.log(this.errorMessage);
  // }
}
