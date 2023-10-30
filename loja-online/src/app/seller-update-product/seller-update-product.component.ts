import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData:undefined | product;

  exibeMessageAtualizar:boolean = false;
  editProductMessage:undefined | string;
  constructor(private route:ActivatedRoute,private product:ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.product.getProduct(productId).subscribe((data)=>{
      this.productData = data;
    })
  }
  submit(data:product){
    if(this.productData){
      data.id=this.productData.id
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.exibeMessageAtualizar = true;
        this.editProductMessage = "Produto atualizado com sucesso!";
      }
    })
    setTimeout(() => {
      this.editProductMessage = undefined;
      this.exibeMessageAtualizar = false;
    }, 8000);
  }
}
