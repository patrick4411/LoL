import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  pass:string;
  list= new Array<String>();
  PassList= new Array<String>();
  contor:number;
  numarLista = 5;
  verificUserValid = false;
  verificPassValid = false;
  compatibil = false;
  avalability = false;

  ngOnInit() {
    this.list = ["David","Roby","Patrick","Mathi","Raul"];
    this.PassList = ["dev1","dev2","dev3","dev4","devboss"];
  }

  checkUser(user: string) {
  
    this.verificUserValid = false;
    this.list.forEach(utilizator => {
     if(utilizator === this.username) {
        this.verificUserValid = true;
     }
     
   });
     
  //this.verificUserValid ? console.log('E bun!') : console.log('E rau!');
    
  }

  checkPass(parole: string){
    this.verificPassValid = false;
    this.PassList.forEach(parola => {
      if(parola === this.pass){
        this.verificPassValid = true;
      }
      
    });
   
    //this.verificPassValid ? console.log('Parola e ok!') : console.log('Parola e gresita!')
  }

  checkAvalability(compatibil: string){
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

  

