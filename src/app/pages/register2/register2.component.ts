import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword){
    return null;
  }
  return password.value === confirmPassword.value ? null : {passwordNoMatch: true};
};

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrl: './register2.component.css'
})
export class Register2Component {
  hide = true;
  submitted = false;
  registerForm2!: FormGroup;
  user = {firstName:'', lastName: '', email: '', password: '', confirmPassword: '', agreeTerms: false};

  constructor (private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm2 = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
      confirmPassword:['', [Validators.required]],
      agreeTerms: [this.user.agreeTerms, [Validators.requiredTrue]],
    }, {validator: confirmPasswordValidator});
  }

  onSubmit(){
      this.submitted = true;
      if (this.registerForm2.valid){
        alert('Form Submitted');
        console.table(this.registerForm2.value);
      }
  }
}
