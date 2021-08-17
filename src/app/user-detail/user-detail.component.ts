import { AppService } from './../services/app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId:any;
  usersData: [];
  selectedUserData:any;
  constructor(private route: ActivatedRoute, private AppService:AppService) { }

  ngOnInit(): void {
    this.getUserData();
    this.route.paramMap.subscribe((param:ParamMap)=>{
      console.log("param>>",param);
      this.userId = param.get('userId');
      
    })
  }

  getUserData(){
    this.AppService.getUsers().subscribe((data)=>{
      console.log("getUsers",data);
      this.usersData = data;
      this.getUserDataById(this.userId)
    });
  }
  
  getUserDataById(id){
    this.usersData.map((item:any)=> {
      if(item.id == id){
        this.selectedUserData = item
      }
    })
  }

}
