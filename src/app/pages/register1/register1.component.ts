import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrl: './register1.component.css',
})
export class Register1Component implements OnInit{
  hide = true;
  submitted = false;
  registerForm1!: FormGroup;
  user = {firstName: '', lastName: '', email: '', password: '', confirmPassword: '', agreeTerms: false};

  constructor (private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm1 = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword:['', [Validators.required]],
      agreeTerms: [this.user.agreeTerms, [Validators.requiredTrue]],
    },{validator: confirmPasswordValidator});
  }


  onSubmit(){
    this.submitted = true;
    if (this.registerForm1.valid){
      alert('Form Submitted.');
      console.table(this.registerForm1.value);
    }
  }
}
