import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  urlForUsers = 'https://todoapp-effb4.firebaseio.com/users.json';
  urlForAuthRegister = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
  urlAuthLogin = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`;
  constructor(private http: HttpClient, private router: Router) { 
    
  }

  login(email:string , password: string ) {
    return this.router.navigateByUrl('home');
    // return this.http.post(this.urlAuthLogin, {email: email, password: password, returnSecureToken: true})
  }

  signUp(email: string, password: string) {
    return this.http.post(this.urlForAuthRegister, {email: email, password: password, returnSecureToken: true } );
  }
}
