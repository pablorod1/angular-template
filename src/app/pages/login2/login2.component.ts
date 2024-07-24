import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {
  hide = true;
  submitted = false;
  loginForm2!: FormGroup;
  user = {email: '', password: '', remember: false};

  constructor (private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm2 = this.fb.group({
      email: ['',[ Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [this.user.remember]
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm2.valid){
      alert("Formulario enviado");
    }
    

    
  }
}
