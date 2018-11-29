import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  pass:string;
  list= new Array<String>();
  contor:number;
  msgUserG = 'Username Gresit';
  verificUserValid = false;
  constructor() { }
  
  ngOnInit() {
    this.list = ["davidxz","roby","patrick","raul","mathi"];
  }


  chechUser(user: string) {

    // console.log(this.username);
  
    this.verificUserValid = false;
    this.list.forEach(utilizator => {
    if(utilizator === this.username) {
        this.verificUserValid = true;
     }
     
   });
     
  //  if(this.verificUserValid === false){
  //    console.log('E rau!');
  //  }

  this.verificUserValid ? console.log('E bun!') : console.log('E rau!');
    
  }

}
