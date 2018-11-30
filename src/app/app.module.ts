import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';

import { AppComponent } from './app.component';
import { LogicaSiArgumentareComponent } from './logica-si-argumentare/logica-si-argumentare.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LogicaSiArgumentareComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
