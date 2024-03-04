import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
  constructor(private renderer: Renderer2){ }

  printInvoice(){
    this.renderer.selectRootElement('card').style.display = 'block'; //Muestra la tarjeta antes de imprimir
    window.print(); //Llama a la función de impresion del navegador.
  }
}
