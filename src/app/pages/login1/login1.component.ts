import { Component  } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.css',

})
export class Login1Component{
  hide = true;
  loginForm1!: FormGroup;
  submitted = false;


  constructor(
    private fb: FormBuilder,

    private router: Router,
  ){

  }
  user = {email: '', password: '', remember: false};

  ngOnInit() {
    this.loginForm1 = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember:[this.user.remember]
    });
  }

  get loginForm1Control(){
    return this.loginForm1.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm1.valid){
      alert("Formulario enviado");
    }
    
  }

}

