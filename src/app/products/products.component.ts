import { Component, OnInit } from '@angular/core';
import { AppService } from './../services/app.service';
import { MessageService } from './../services/message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsData:any;
  constructor(private router:Router, private AppService: AppService, private messageService:MessageService) { }
  ngOnInit(): void {
    this.AppService.getProducts().subscribe((items)=>{
      // console.log("items",items);
      this.productsData = items;
    })
  }
  handleAddToCart(elm:any){
    console.log("add to cart clicked", elm);
    this.messageService.sendCartProducts(elm);
  }

  redirectToDetail(data){
    this.messageService.sendCartAmount2(data)
    this.router.navigate(['/product-detail/product1']);
  }

}
