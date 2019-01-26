import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  text: string;
<<<<<<< HEAD
  userData = new Array<Array<string>>();
=======
  nickName: string;
  bioText: string;
>>>>>>> 9007034e135daaf7701d8277dd12d7a71d26f97c

  disabledNickName = true;
  disabledbiotext = true;
  constructor() { }

  ngOnInit() {
  }

  toggleDisabledNickName() {
      this.disabledNickName = !this.disabledNickName;
  }

  toggleDisabledBio() {
      this.disabledbiotext = !this.disabledbiotext;
  }

}

