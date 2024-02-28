import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductsData() {
    return [
      {
        id: 1,
        imageUrl: '/assets/camisa.png',
        name: 'Blue Shirt',
        description:
          'A versatile wardrobe staple crafted for comfort and style.Made from premium cotton, this shirt offers a tailored fit and timeless appeal.Elevate your look effortlessly with this essential piece.',
        category: 'Clothes',
        price: 50,
        quantity: 1,
        rating: 4,
        inventoryStatus: 'INSTOCK',
      },
      {
        id: 2,
        imageUrl: '/assets/pantalones.png',
        name: 'Trousers',
        description:
          'Elevate your style with our Blue Chino Pants. Crafted from premium cotton twill, they offer comfort and durability. ',
        category: 'Clothes',
        price: 70,
        quantity: 1,
        rating: 5,
        inventoryStatus: 'INSTOCK',
      },
      {
        id: 3,
        imageUrl: '/assets/camiseta.png',
        name: 'Grey T-Shirt',
        category: 'Clothes',
        description:
          'Embrace laid-back comfort with our Washed Grey Oversized Tee. Made from soft, lightweight fabric, this tee offers a relaxed fit for effortless style.',
        price: 20,
        quantity: 1,
        rating: 4,
        inventoryStatus: 'OUTOFSTOCK',
      },
      {
        id: 4,
        imageUrl: '/assets/gorra.png',
        name: 'Black Cap',
        description:
          'A black cap featuring a classic design with a sturdy brim and adjustable strap for a comfortable fit. Made from high-quality materials, this cap is suitable for various outdoor activities and casual wear.',
        category: 'Accessories',
        price: 15,
        quantity: 1,
        rating: 5,
        inventoryStatus: 'LOWSTOCK',
      },
      {
        id: 5,
        imageUrl: '/assets/vestido.png',
        name: 'Dress',
        description:
          'A floral dress perfect for embracing the beauty of spring and summer. This dress features a charming floral print on a lightweight fabric, creating a feminine and elegant look.',
        category: 'Clothes',
        price: 30,
        quantity: 1,
        rating: 4,
        inventoryStatus: 'INSTOCK',
      },
      {
        id: 6,
        imageUrl: '/assets/zapatos.png',
        name: 'Shoes',
        description:
          'A pair of light brown shoes exuding timeless elegance and versatility. Crafted from premium leather, these shoes boast a sleek and refined design suitable for both formal and casual occasions.',
        category: 'Clothes',
        price: 40,
        quantity: 1,
        rating: 5,
        inventoryStatus: 'INSTOCK',
      },
      {
        id: 7,
        imageUrl: '/assets/gafas.png',
        name: 'Black Glasses',
        description:
          'A pair of sleek black sunglasses, epitomizing modern sophistication and timeless style. Crafted with precision from high-quality materials, these sunglasses offer both durability and comfort. ',
        category: 'Clothes',
        price: 15,
        quantity: 1,
        rating: 4,
        inventoryStatus: 'OUTOFSTOCK',
      },
    ];
  }

  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}
