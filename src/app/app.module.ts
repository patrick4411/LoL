import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LogicaSiArgumentareComponent } from './logica-si-argumentare/logica-si-argumentare.component';


@NgModule({
  declarations: [
    AppComponent,
    LogicaSiArgumentareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
