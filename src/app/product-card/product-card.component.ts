import { Component, Input } from '@angular/core';
import { Product } from '../interface/Product';
import { RouterLink } from '@angular/router';
import { CartService } from '../service/cart/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  stars: Array<number> = [];

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  ngOnInit() {
    this.stars = this.starsNumber(this.product.rating);
  }

  starsNumber(rating: number): Array<number> {
    const stars: Array<number> = [];

    for (let i = 0; i < 5; i++) {
      if (rating > 1) {
        stars.push(1);
        rating--;
      } else if (rating % 1 !== 0) {
        stars.push(rating % 1);
        rating = 0;
      } else {
        stars.push(0);
      }
    }

    return stars;
  }
}
