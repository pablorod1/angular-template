import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-animated1',
  templateUrl: './animated1.component.html',
  styleUrl: './animated1.component.css'
})
export class Animated1Component {
  hide = true;
  @ViewChild('container') container!: ElementRef;

  signIn(){
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  signUp(){
    this.container.nativeElement.classList.add('right-panel-active');
  }
}
