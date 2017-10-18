import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServService } from '../auth-serv.service';
import { routerTransition } from '../router.animations';

class User {
  displayName: string;
  photoURL: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class SignupComponent implements OnInit {
  constructor(private authServService:AuthServService) {}

  ngOnInit() {
  }

  onSup(form: NgForm, user: User) {
    user = new User();
    user.displayName = form.value.name;
    user.photoURL = form.value.photo;
    user.email = form.value.email;
    user.password = form.value.password;
    this.authServService.sUpFunc(user.displayName, user.photoURL, user.email, user.password);
  }
}
