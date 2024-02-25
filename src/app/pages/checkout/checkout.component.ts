import { Component, OnInit } from '@angular/core';
import { PAISES } from './paises';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit{
  paises = PAISES;
  submitted: boolean = false;
  checkoutForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkoutForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      address:['', Validators.required],
      postalCode:['', Validators.required],
      city:['', Validators.required],
      country:['', Validators.required],
    })
  }

  onSubmit(){
    this.submitted = true;
    if (this.checkoutForm.valid){
      alert('Checkout Done.');
    }
  }
}
