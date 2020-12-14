import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { setTimeout } from 'timers';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  
  constructor(private auth: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm =  new FormGroup({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(8)]
      })
    });
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    let password = this.loginForm.value.email;
    let email = this.loginForm.value.password;
    this.auth.login(email, password).subscribe(resData => {
      
        this.router.navigateByUrl('/home');
      
    }, error => {
      console.log(error);
    });

  }

}
