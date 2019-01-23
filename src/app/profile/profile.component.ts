import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class InputTextDemo {

  text: string;

  disabled: boolean = true;

  toggleDisabled() {
      this.disabled = !this.disabled;
  }
}