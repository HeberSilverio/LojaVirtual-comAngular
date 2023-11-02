import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  productData:undefined|product;
  FeaturedProducts:any|product

  constructor(private activeRoute:ActivatedRoute, private product:ProductService) { }

  ngOnInit(): void {
    let productId=this.activeRoute.snapshot.paramMap.get(`productId`);
    productId && this.product.getProduct(productId).subscribe((result)=>{
      this.productData=result;
    })
    this.product.FeaturedProducts().subscribe((data)=>{
      this.FeaturedProducts=data;
    })
  }

}
