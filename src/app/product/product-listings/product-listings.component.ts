import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();

    const producctsObservable = this.productService.getProducts()

    producctsObservable.subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.error('次のエラーが発生しました:' + err)
      }
    )

  }

}
