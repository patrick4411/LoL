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
  regpass1:string;
  regpass2:string;
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
  //  this.checkAvalability();
  //this.verificUserValid ? console.log('E bun!') : console.log('E rau!');
    
  }

  // checkPass(parole: string){
  //   this.verificPassValid = false;
  //   this.PassList.forEach(parola => {
  //     if(parola === this.pass){
  //       this.verificPassValid = true;
  //     }
      
  //   });
   
  //   //this.verificPassValid ? console.log('Parola e ok!') : console.log('Parola e gresita!')
  // }

  checkAvalability(){
    if(this.verificPassValid === true && this.verificUserValid === true)
      this.compatibil = true;
      else
        this.compatibil = false;
        if(this.verificUserValid !== true)
          console.log('Numele e gresit!')
        if(this.verificPassValid !== true)
        console.log('Parola e gresita!')
        this.compatibil ? console.log('Ai intrat!') : console.log('Nu ai intrat!')
      }
  
  








 }

  

