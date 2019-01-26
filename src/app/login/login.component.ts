import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector:  'app-login',
  templateUrl:  './login.component.html',
  styleUrls:  ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerOrLogin = true;
  username:  string;
  pass:  string;
  regPass1: string;
  regPass2: string;
  list = new Array<Array<String>>();
  PassList = new Array<String>();
  verificUserValid = false;
  verificPassValid = false;
  compatibil = false;

  constructor (private router: Router) {}

  ngOnInit() {
  }

  logIn() {
    // if ( this.checkUser() && this.checkAvalability()) {
    if ( this.checkUser()) {
      this.checkAvalability();
      console.log('in4');
      console.log(this.username);
      this.router.navigate(['profile']);
    }
    // this.checkAvalability();
  }

  checkUser(): boolean {

    this.verificUserValid = false;
    this.verificPassValid = false;
    this.list.forEach(utilizator => {
      console.log(utilizator);
     if (utilizator[0] = this.username) {
       console.log('in1');
        this.verificUserValid = true;
        if (utilizator[1] === this.pass) {
          console.log('in2');
          this.verificPassValid = true;
          return true;
        }
     }
   });
   console.log('in3');
   if (this.verificUserValid && this.verificPassValid) {
    return true;
   } else {
    return false;
   }
  }

  checkAvalability() {
    if (this.verificPassValid === true && this.verificUserValid === true) {
      this.compatibil = true;
    } else {
      this.compatibil = false;
    }
    if (this.verificUserValid !== true) {
      console.log('Numele e gresit!');
    }
    if (this.verificPassValid !== true) {
      console.log('Parola e gresita!');
    }
    this.compatibil ? console.log('Ai intrat! ' + this.username) :  console.log('Nu ai intrat! ' + this.username);
  }

  registerUser() {
    if ((this.registerOrLogin !== true) && this.checkFilter ) {
      this.list.push([this.username, this.regPass1]);
    }
    this.registerOrLogin = !this.registerOrLogin;
  }

  checkFilter() {
    if ( (this.username !== '') && (this.list.find( x => x[0] === this.username ) === undefined ) && (this.regPass1 === this.regPass2) ) {
      return true;
    }
    return false;
  }
}
