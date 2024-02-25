import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GalleryItem } from '../../pages/gallery/gallery.data';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems: GalleryItem[] = [];
  totalPrice: number = 0;

  constructor (private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });

    this.cartService.getTotalPrice().subscribe(totalPrice => {
      this.totalPrice = totalPrice
    });
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
    this.cartService.calculateTotalPrice();
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 0) {
      this.cartItems[index].quantity--;
    }
    if (this.cartItems[index].quantity === 0){
      this.cartItems.splice(index, 1);
    }
    this.cartService.calculateTotalPrice();
  }
}
