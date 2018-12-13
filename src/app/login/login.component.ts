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
<<<<<<< HEAD
  avalability = false;

  ngOnInit() {
    this.list = ["David","Roby","Patrick","Mathi","Raul"];
    this.PassList = ["dev1","dev2","dev3","dev4","devboss"];
=======
  ngOnInit() {
  
>>>>>>> 476b0b1362e4f692a97a1baa95468f0f7d1b3906
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
<<<<<<< HEAD
      else
        this.compatibil = false;
        if(this.verificUserValid !== true)
          console.log('Numele e gresit!')
        if(this.verificPassValid !== true)
        console.log('Parola e gresita!')
        this.compatibil ? console.log('Ai intrat!') : console.log('Nu ai intrat!')
      }
    
    // checkCompatibility(avalabill: string){
    //   if(this.avalability === true)
    //     console.log('Ai intrat!')        
    //   if(this.avalability !== true)
    //     console.log('Nu ai intrat!')
    //   if(this.verificUserValid !== true)
    //     console.log('Numele e gresit!')
    //   if(this.verificPassValid !== true)
    //     console.log('Parola e gresita!')

    // }
  
 }

=======
    else
      this.compatibil = false;
    if(this.verificUserValid !== true)
      console.log('Numele e gresit!')
    if(this.verificPassValid !== true)
      console.log('Parola e gresita!')
    this.compatibil ? console.log('Ai intrat!') : console.log('Nu ai intrat!')
    }
>>>>>>> 476b0b1362e4f692a97a1baa95468f0f7d1b3906
  
  registerUser(){
    if(this.username != '' && (this.regPass1 === this.regPass2))
      this.list.push([this.username, this.regPass1]);
    this.registerOrLogin = !this.registerOrLogin;
  }
}
