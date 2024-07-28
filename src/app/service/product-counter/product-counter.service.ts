import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductCounterService {
  private counter = new BehaviorSubject(0);

  getProductCounter() {
    return this.counter.asObservable();
  }

  setProductCounter(value: number) {
    this.counter.next(value);
  }

  constructor() {}
}
