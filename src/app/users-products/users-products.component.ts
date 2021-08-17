import { Component, OnInit } from '@angular/core';
import { AppService } from './../services/app.service';
@Component({
  selector: 'app-users-products',
  templateUrl: './users-products.component.html',
  styleUrls: ['./users-products.component.scss']
})
export class UsersProductsComponent implements OnInit {
  userData;
  mixData;
  constructor(private AppService:AppService) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(){
    this.AppService.getUsers().subscribe((res)=>{
      this.userData = res;
      this.getProductsData();
      console.log("getUsersData",res)
    })
  }
  
  getProductsData(){
    this.AppService.getProducts().subscribe((res)=>{
      let arr = this.userData;
      console.log("productsData",res)
      // this.productsData = res;
      arr.forEach(element => {
        element.products = res;
      });
      this.mixData = arr;
    })
  }

}
