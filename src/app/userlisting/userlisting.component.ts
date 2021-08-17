import { Component, OnInit } from '@angular/core';
import { AppService } from './../services/app.service';
import { MessageService } from './../services/message.service';
@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.scss']
})
export class UserlistingComponent implements OnInit {
  usersData: any;
  constructor(private AppService:AppService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getUserDataFromMessageService();

    this.AppService.getUsers().subscribe((data)=>{
      // console.log("getUsers",data);
      this.usersData = data;
    });
    
    this.AppService.getProducts().subscribe((data)=>{
      console.log("getProducts",data);
    });
    
    // console.log("this.usersData",this.usersData)
  }

  getUserDataFromMessageService(){
    this.messageService.getCartAmount().subscribe((data:any)=>{
      console.log("Data Received from Card", data)
    })
  }

  

}
