import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cartItems } from '../components/cart/cart-data';
import { GalleryItem } from '../pages/gallery/gallery.data';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<GalleryItem[]>(cartItems);
  private totalPriceSubject = new BehaviorSubject<number>(0);


  constructor() {  }

  getCartItems(){
    return this.cartSubject.asObservable();
  }

  addToCart(item: GalleryItem) {
    const existingItem = cartItems.find(existing => existing.id === item.id);

    if (existingItem){
      existingItem.quantity++;
    }
    else{
      cartItems.push(item);
    }
    this.cartSubject.next(cartItems.slice());
    this.calculateTotalPrice();
  }

  getTotalPrice() {
    return this.totalPriceSubject.asObservable();
  }

  calculateTotalPrice(){
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    this.totalPriceSubject.next(totalPrice);
  }
}
