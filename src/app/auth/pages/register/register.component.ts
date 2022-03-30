import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isInvalidEmailValidator } from '../../../shared/validators/input-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
    .login-form {
    width: 340px;
    margin: 50px auto;
  	font-size: 15px;
    }
    .login-form form {
        margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
  `]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', isInvalidEmailValidator],
    password: [],
    confirmPassword: []
  })

  constructor(private fb: FormBuilder) { }

  get name() {
    return this.registerForm.get('name')
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  ngOnInit(): void {
  }

  submit(){
    
  }

}
