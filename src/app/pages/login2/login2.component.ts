import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RbacService } from '../../services/rbac.service';
import { Router } from '@angular/router';
import { Roles } from '../../types';

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

  constructor (private fb: FormBuilder, private router: Router, private _rbacService: RbacService) { }

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
      this._rbacService.setAuthenticatedUser({
        id: 1,
        name:'Seller',
        role: {
          id: 2,
          name: 'Seller',
          uid: 'SELLER',
          extends: null,
        },
      });
      alert("You logged in as Seller");
      this.router.navigate(['/extended']);
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
