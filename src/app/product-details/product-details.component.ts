import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsData from '../../assets/products.json';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  products: Array<any> = productsData;
  id!: number;
  productDetails: any;

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    this.productDetails = this.products.find(
      (product) => product.id === this.id
    );
    console.log(this.productDetails);
  }
}
