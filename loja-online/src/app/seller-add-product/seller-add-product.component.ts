import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage:string | undefined;
  exibeMensagem = false; 
  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }

  submit(data:product){
    this.product.addProduct(data).subscribe((result)=>{
      if(result){
         this.exibeMensagem=true;
         this.addProductMessage="Produto cadastrado com sucesso!";
      }
      setTimeout(()=>{
         this.addProductMessage=undefined
         this.exibeMensagem=false
         },10000);
    });
  }
}
