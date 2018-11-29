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
  verificUserValid = false;
  
  ngOnInit() {
    this.list = ["David","Roby","Patrick","Raul","Mathi"];
  }


  chechUser(user: string) {
  
    this.verificUserValid = false;
    this.list.forEach(utilizator => {
     if(utilizator === this.username) {
        this.verificUserValid = true;
     }
     
   });
     
  this.verificUserValid ? console.log('E bun!') : console.log('E rau!');
    
  }

}
