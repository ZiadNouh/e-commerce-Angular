import { Component } from '@angular/core';
import { CartProductComponent } from '../cart-product/cart-product.component';
import { CartService } from '../service/cart/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice() {
    this.totalPrice = parseFloat(
      this.cartItems
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2)
    );
  }
}
