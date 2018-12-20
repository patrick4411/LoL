import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerOrLogin= true;
  username:string;
  pass:string;
  regPass1:string;
  regPass2:string;
  list = new Array<Array<String>>();
  PassList= new Array<String>();
  verificUserValid = false;
  verificPassValid = false;
  compatibil = false;
  ngOnInit() {
  }

  checkUser() {
  
    this.verificUserValid = false;
    this.verificPassValid = false;
    this.list.forEach(utilizator => {
     if(utilizator[0] = this.username) {
        this.verificUserValid = true;
        if(utilizator[1] === this.pass){
          this.verificPassValid = true;
        }
     }
     
   });
  }

  checkAvalability(){
    if(this.verificPassValid === true && this.verificUserValid === true)
      this.compatibil = true;
    else
      this.compatibil = false;
    if(this.verificUserValid !== true)
      console.log('Numele e gresit!')
    if(this.verificPassValid !== true)
      console.log('Parola e gresita!')
    this.compatibil ? console.log('Ai intrat! ' + this.username) : console.log('Nu ai intrat! ' + this.username)
    }
  
  registerUser(){ 
    if((this.registerOrLogin != true) && this.checkFilter )
      this.list.push([this.username, this.regPass1]);
      this.registerOrLogin = !this.registerOrLogin;
  }

  checkFilter(){
    if( (this.username !== '') && (this.list.find( x => x[0] == this.username ) === undefined ) && (this.regPass1 === this.regPass2) )
      return true;
    else
      return false;
  }


}
