import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service'
import { MessageService } from './../services/message.service';

@Component({
  selector: 'header-sagar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  carts = []; 
  colorsArr = [];
  constructor(public commonData:UtilityService, private messageService:MessageService) { 
    // From Shared Service
    // this.carts = Object.assign([], messageService.allCartsProducts);
    this.carts = messageService.allCartsProducts;
  }

  ngOnInit(){
    this.getCardData();
    this.getBehaviourSubjectData();
    this.getSharedServiceData();
  }

  getSharedServiceData(){
    this.messageService.getCartProducts();
    // alert("Called getSharedServiceData")
  }
  
  getData(){
    this.colorsArr = this.commonData.getColorsData('type');
    // this.colorsArr = this.commonData.getColorsData();
  }
  
  // From Subject Service
  getCardData(){
    this.messageService.getCartAmount().subscribe(res=>{
      // alert("Called Subject Service")
      this.carts.push(res);
      console.log("getCardData>>",res)
    })
  }
  
  // From Behaviour Subject Service
  getBehaviourSubjectData(){
    this.messageService.getCartAmount2().subscribe(res=>{
      // alert("Called Behaviour Subject Service")
      console.log("getBehaviourSubjectData>>",res)
    })
  }

}
