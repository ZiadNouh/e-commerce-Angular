import { Component, Input } from '@angular/core';
import { Product } from '../interface/Product';
import { CartService } from '../service/cart/cart.service';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css',
})
export class CartProductComponent {
  @Input() product!: Product;

  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
