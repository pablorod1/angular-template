import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { RbacService } from '../../services/rbac.service';
import { Roles } from '../../types';
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
    private _rbacService: RbacService,
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
      this._rbacService.setAuthenticatedUser({
        id:1,
        name: 'Customer',
        role: {
          id:1,
          name: 'Customer',
          uid: 'CUSTOMER',
          extends: null,
        },
      });
      alert("You logged in as Client.");
      this.router.navigate(['/regular']);
    }
    
    
    if (this._rbacService.isGranted(Roles.ADMINISTRATOR)) {
      console.log('Access granted for administrator!');
    } else {
      console.log('Access denied for administrator!');
    }

    if (this._rbacService.isGranted(Roles.SELLER)) {
      console.log('Access granted for Seller!');
    } else {
      console.log('Access denied for Seller!');
    }

    if (this._rbacService.isGranted(Roles.CUSTOMER)) {
      console.log('Access granted for user!');
    } else {
      console.log('Access denied for user!');
    }
  }

}

