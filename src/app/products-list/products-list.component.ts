import { Component } from '@angular/core';

import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsRequestsService } from '../service/products-requests/products-requests.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  products: any;

  constructor(private productsRequestService: ProductsRequestsService) {}

  ngOnInit() {
    this.productsRequestService.getProductList().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
}
