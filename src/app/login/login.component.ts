import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;

  constructor(public fb: FormBuilder) { 

    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    firebase.auth().signInWithEmailAndPassword(form.value.email, form.value.password).then((data) => {
      console.log(data);
      this.message = "you have logged in successfully"
    }).catch((error) => {
      console.log(error);
      this.userError =error;
    })
  }

}
