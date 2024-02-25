import { Component, ViewChild, OnInit } from '@angular/core';
import { GalleryItem, galleryData } from './gallery.data';
import { MatPaginator } from '@angular/material/paginator';
import { CartService } from '../../services/cart.service';




@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  providers: [CartService],
})
export class GalleryComponent implements OnInit{
  galleryData: GalleryItem[] = galleryData;
  paginatedGalleryData: GalleryItem[] = [];
  totalPrice: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.cartService.getTotalPrice().subscribe(totalPrice => {
      this.totalPrice = totalPrice;
    });
  }

  constructor( private cartService: CartService) {
    
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.paginator.page.subscribe(() => {
        this.paginateData();
        this.scrollToTop();
      });
      this.paginateData();
    }, 0);
  }

  paginateData(): void {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.paginatedGalleryData = [...this.galleryData.slice(startIndex, endIndex)];
  }

  addToCart(item: GalleryItem){
    this.cartService.addToCart(item);
    console.log(this.totalPrice);
  }

  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}

