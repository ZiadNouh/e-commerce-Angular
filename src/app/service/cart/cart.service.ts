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
    const existingProduct = currentCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      currentCart.push(product);
    }

    this.cart.next(currentCart);
  }

  getCartItems() {
    return this.cart.value;
  }

  removeFromCart(productId: number) {
    const currentCart = this.cart.value.filter((item) => item.id !== productId);
    this.cart.next(currentCart);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentCart = this.cart.value;
    const product = currentCart.find((item) => item.id === productId);

    if (product) {
      product.quantity = quantity;
      this.cart.next(currentCart);
    }
  }
}
