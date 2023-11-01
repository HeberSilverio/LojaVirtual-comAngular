import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-carrossel-bootstrap',
  templateUrl: './carrossel-bootstrap.component.html',
  styleUrls: ['./carrossel-bootstrap.component.css'],

	providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers

})
export class CarrosselBootstrapComponent implements OnInit {
  popularProducts:any | product;

  constructor(config: NgbCarouselConfig, private product:ProductService) {
    // customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      this.popularProducts=data;
    })
  }

}
