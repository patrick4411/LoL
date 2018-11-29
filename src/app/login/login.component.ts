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
  constructor() { }
  
  ngOnInit() {
    this.list = ["davidxz","roby","patrick","raul","mathi"];
  }


  chechUser(user: string) {

    console.log(this.username);

  //  this.list.forEach(utilizator => {
  //   if(utilizator === this.username) {
  //      return true;
  //    }
  //    else{
  //       return this.msgUserG;
  //     }
     
  //  });
    
  }

}
