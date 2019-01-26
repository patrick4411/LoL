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
  userData = new Array<Array<string>>();

  disabledNickName = true;
  constructor() { }

  ngOnInit() {
  }

  toggleDisabledNickName() {
      this.disabledNickName = !this.disabledNickName;
  }

}

