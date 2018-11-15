import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logica-si-argumentare',
  templateUrl: './logica-si-argumentare.component.html',
  styleUrls: ['./logica-si-argumentare.component.css']
})
export class LogicaSiArgumentareComponent implements OnInit {

  astazi = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay(), 0, 0, 0);
  grupHappyBirthday = new Array();
  ziDeNastere: Date;
  nume: string;
  nume1: string;
  msg: string;
  index: number;
  filtru: boolean;
  mesajTest: string;
  constructor() { }

  ngOnInit() {
    this.index = 0;
    this.mesajTest = 'Sub 10!';
    this.filtru = false;
    this.nume = 'Host \'s Server';
    this.ziDeNastere = new Date('2018-09-28 0:00:00');
    if (this.isZiDeNastere(this.ziDeNastere) === false) {
      this.msg = 'La Multi Ani ' + this.nume;
    } else {
      this.msg = 'Mai e putin!';
    }



    while (this.filtru !== true) {

      this.index ++;
      if (this.index > 10) {
        this.filtru = true;
      }
      console.log(this.index);
      console.log(this.filtru);
    }

    if (this.filtru === true) {
      this.mesajTest = 'a trecut de 10!!!!';
    }

  }

  isZiDeNastere(ziNastere: Date): boolean {
    if (ziNastere === this.astazi) {
      return true;
    } else {
      return false;
    }
  }

}
