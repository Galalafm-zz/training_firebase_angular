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
  titleAlert:string = 'Invalid Email.';
  password:string = '';
  error: {name:string, message:string} = {name: '', message: ''};

  constructor(private authServService:AuthServService, private router: Router, private fb: FormBuilder) {
    this.rForm = fb.group({
      'email' : [null, [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
      'validate' : ''
    });
  }

  ngOnInit() {
  }

  onSin(post):void {
    this.authServService.sInFunc(post.email, post.password)
    .catch(_error => {
      this.error = _error
      this.router.navigate(['/signin'], 'signin')
    })
  }
}
