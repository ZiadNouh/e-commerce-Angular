import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import productsData from '../../assets/products.json';
import { CartService } from '../service/cart/cart.service';
import { ProductsRequestsService } from '../service/products-requests/products-requests.service';
import { Product } from '../interface/Product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'], // Corrected to 'styleUrls'
})
export class ProductDetailsComponent {
  products: any;
  id!: number;
  productDetails: any;
  stars: Array<number> = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private cartService: CartService,
    private productsRequestService: ProductsRequestsService
  ) {}

  ngOnInit() {
    this.id = +this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    this.productsRequestService.getProductList().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
    this.productDetails = this.products.find(
      (product: any) => product.id === this.id
    );
    this.stars = this.starsNumber(this.productDetails.rating);
  }
  addToCart() {
    this.cartService.addToCart(this.productDetails);
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
