import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;

  constructor(public fb:FormBuilder) {

    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword:['', [Validators.required]]
    }, {
      validator: this.checkIfMatchingPasswords("password", "confirmPassword")             //custom validator
    })

   }
   
  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group:FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value == confirmPassword.value) {
        return;
      }
      else {
        confirmPassword.setErrors({
          notEqualToPassword: true                  //custom error
        })
      }
    }
  }


  onSubmit(signupform) {
    let email: string = signupform.value.email;
    let password: string = signupform.value.password;
    let firstName: string = signupform.value.firstName;
    let lastName: string = signupform.value.lastName;

    firebase.auth().createUserWithEmailAndPassword(email,password).then((response) => {
      console.log(response);

      // let randomNumber: Math.floor(Math.random() * 1000);

      response.user.updateProfile({
        displayName: firstName + ' ' + lastName,
        photoURL: "https://api.adorable.io/avatars/" + 123
      }).then(() => {
        this.message = "you have signed successfully. Please Login"
      })
    }).catch((error) => {
      console.log(error);
      this.userError = error;
    })

  }

  ngOnInit(): void {
  }

}
