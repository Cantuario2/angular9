import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'cantuario2-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService, private headerSevice: HeaderService) {
    headerSevice.headerData = {
      title: 'Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    });
  }

}
