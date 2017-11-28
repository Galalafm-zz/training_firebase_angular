import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusesService } from './statuses/statuses.service';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import { AuthServService } from './auth-serv.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatusesComponent } from './statuses/statuses.component';
import { AuthComponent } from './auth/auth.component';

// export const firebaseConfig = {
//   apiKey: "AIzaSyB8sCm1r_h6BvGUyrBYCS29nY0hV9JQ4do",
//   authDomain: "galapp-d2847.firebaseapp.com",
//   databaseURL: "https://galapp-d2847.firebaseio.com",
//   projectId: "galapp-d2847",
//   storageBucket: "",
//   messagingSenderId: "851937489645"
// };

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    NavComponent,
    SidebarComponent,
    StatusesComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,
    HttpModule,
    BrowserAnimationsModule,
    routing,
    // AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [StatusesService, AuthServService],
  bootstrap: [AppComponent]
})

export class AppModule { }
