import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login/login.service';
import {AuthResponse} from '../../app/models/auth-response';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signUpForm: FormGroup;
  
  constructor(private authService: LoginService, public alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      lastName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      passwordConfirm: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(8)]
      }),
    });

    
  }

  private async showAlert(message: string) {
    const emailExixst = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Authentication failed',
      message: message,
      buttons: ['OK']
    });
   await emailExixst.present();
  }

  signUp() {
    if (this.signUpForm.value.password !== this.signUpForm.value.passwordConfirm ) {
      return;
    }
    if (!this.signUpForm.valid) {
      return;
    }else {
      const email = this.signUpForm.value.email;
      const password = this.signUpForm.value.password;

      this.authService.signUp(email, password).subscribe((resData: AuthResponse) => {
        let messageSuccess = "Successful registration"
         
        setTimeout(()=> {
          this.router.navigateByUrl('/login');
        },2000)
      }, errorResponse => {
        
        const code = errorResponse.error.error.message;
        let message = 'Could not sign you up, please try again.';
        if (code ===  'EMAIL_EXISTS') {
          message = 'This email address exists already!';
        }

        this.showAlert(message);
        
      }
      );
      
    }
    
  }

}
