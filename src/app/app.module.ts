import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {                                //copied from firebase console
  apiKey: "AIzaSyBB9T1XTn0c5F4Yy58y9v1gcQptD-MD484",
  authDomain: "fir-c20a2.firebaseapp.com",
  databaseURL: "https://fir-c20a2.firebaseio.com",
  projectId: "fir-c20a2",
  storageBucket: "fir-c20a2.appspot.com",
  messagingSenderId: "755429054839",
  appId: "1:755429054839:web:ed8df1259d23572cb02972",
  measurementId: "G-YHQR5MT0TY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
