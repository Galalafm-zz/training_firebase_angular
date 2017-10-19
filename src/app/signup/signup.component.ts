import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServService } from '../auth-serv.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//
// class User {
//   // displayName: string;
//   // photoURL: string;
//   email: string;
//   password: string;
// }

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class SignupComponent implements OnInit {
  rForm: FormGroup;
  post:any;
  email:string = '';
  titleAlert:string = 'Invalid Email.';
  password:string = '';
  error: {name:string, message:string} = {name: '', message: ''};

  constructor(private authServService:AuthServService, private fb: FormBuilder, private router: Router) {
    this.rForm = fb.group({
      'email' : [null, [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
      'validate' : ''
    });
  }

  ngOnInit() {
  }

  onSup(post):void {
    this.authServService.sUpFunc(post.email, post.password)
    .catch(_error => {
      this.error = _error
      this.router.navigate(['/signup'], 'signup')
    })
  }
}
