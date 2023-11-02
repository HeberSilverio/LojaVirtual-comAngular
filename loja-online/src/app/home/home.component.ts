import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  FeaturedProducts:any|product

  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.product.FeaturedProducts().subscribe((data)=>{
      this.FeaturedProducts=data;
    })
  }

}
