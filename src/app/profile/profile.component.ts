import { Component, OnInit, Input } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user: string;
  text: string;
  userData = new Array<Array<string>>();
  nickName: string;
  bioText: string;

  disabledNickName = true;
  disabledbiotext = true;
  constructor() { }

  ngOnInit() {
    console.log('profile');
    console.log(this.user);

  }

  toggleDisabledNickName() {
      this.disabledNickName = !this.disabledNickName;
  }

  toggleDisabledBio() {
      this.disabledbiotext = !this.disabledbiotext;
  }

  saveProfile(){
    this.userData.push([,this.nickName,this.bioText]);
    console.log(this.userData);
  }

  loadProfile(){
   this.userData.push();
   this.userData.push([]) 
    
  }


}

