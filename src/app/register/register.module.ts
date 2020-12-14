import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http'
import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { LoginService } from '../login/login.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  declarations: [RegisterPage],
  providers: [LoginService, HttpClient]
})
export class RegisterPageModule {}
