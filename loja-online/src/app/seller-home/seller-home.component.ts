import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined | product[]
  productMessageDelete:undefined | string;
  exibeMensagemDelete:boolean = false;

  constructor(private product:ProductService) { }

  ngOnInit(): void {
    this.list();
  }
  deleteProduct(id:number){
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.exibeMensagemDelete=true;
        this.productMessageDelete="Produto apagado com sucesso!";
        this.list();
      }
    })
    setTimeout(()=>{
      this.productMessageDelete=undefined
      this.exibeMensagemDelete=false
    },5000);
  }
    list(){
      this.product.productList().subscribe((result)=>{
        if(result){
          this.productList=result;
        }
      })
    }


}
