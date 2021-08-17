import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
  userForm:any;
  data: any = [];
  validPattern = "^[a-zA-Z][a-zA-Z ]*$";
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.generateForm();
  }

  numberValidateFunc(){
    return '^[0-9]*$'
  }

  generateForm(){
    this.userForm = this.fb.group({
      txtName: ['', [Validators.required, Validators.pattern(this.validPattern)]],
      txtEmail: ['', Validators.required],
      txtPhone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(this.numberValidateFunc())]],
      txtMsg: ['', Validators.required],
    })
  }

  handleFormSubmit(){
    console.log("this.userForm",this.userForm);
    this.data.unshift(this.userForm.value);
    this.userForm.reset();
  }

}
