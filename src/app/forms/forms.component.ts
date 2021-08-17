import { AppService } from '../services/app.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  userForm2:any = [];
  userForm:any;
  isEdited = false;
  userFormObj:any = {
    name: "",
    email: "",
    desc: "",
    phone: ""
  }
  constructor(private AppService: AppService) { }

  ngOnInit(): void {
    this.getPostData();
  }

  getPostData(){
    this.AppService.getPostData().subscribe((item)=>{
      this.userForm2 = item;
    })
  }

  handleEdit(item, ind){
    console.log("Edited Item", ind);
    this.isEdited = true;
    this.userFormObj = {
      name: item.txtName,
      email: item.txtEmail,
      phone: item.txtPhone,
      desc: item.txtMsg,
      index: ind
    }
  }

  handleDelete(item){
    let arr = this.userForm2.filter(function(elm) {
      return item.txtName !== elm.txtName
    });
    console.log("arr",arr)
    this.userForm2 = arr;
  }

  handleFormSubmit(formData:any){
    console.log("Form Data", formData.value);
    console.log("Form Data", this.userFormObj.index);
    if(this.isEdited){
      this.userForm2[this.userFormObj.index] = formData.value;
    } else{
      //Send Data to Server
      let obj = {
        "id": Date.now(),
        "title": formData.value.txtName,
        "author": formData.value.txtEmail
    }
      this.AppService.postUserData(obj).subscribe((res)=>{
        console.log("post", res);
        this.getPostData();
      })
      this.userForm2.push(formData.value);
    }
    formData.reset();
  }

}
