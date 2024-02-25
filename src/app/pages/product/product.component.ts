import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { GalleryItem, galleryData } from '../gallery/gallery.data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  quantity: number = 1;
  galleryData: GalleryItem[] = galleryData;
  uniqueIds = new Set<number>();
  filteredGalleryData!: GalleryItem[];

  constructor (private cartService: CartService) { }

  ngOnInit () {
    this.galleryData.forEach(item => {
      this.uniqueIds.add(item.id);
    });
    this.filteredGalleryData = this.galleryData.filter(item => this.uniqueIds.has(item.id));
  }

  addToCart(item: GalleryItem){
    this.cartService.addToCart(item);
  }

  increaseQuantity(){
    this.quantity++;
  }

  decreaseQuantity(){
    this.quantity--;
  }
}
