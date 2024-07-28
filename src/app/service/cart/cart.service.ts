// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(product: any) {
    const currentCart = this.cart.value;
    currentCart.push(product);
    this.cart.next(currentCart);
  }

  getCartItems() {
    return this.cart.value;
  }

  removeFromCart(productId: number) {
    const currentCart = this.cart.value.filter((item) => item.id !== productId);
    this.cart.next(currentCart);
  }
}
