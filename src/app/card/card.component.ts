import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { UtilityService } from './../services/utility.service';
import { MessageService } from './../services/message.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
 @Input() employeeData:any;
 @Input() salary:any;
 @Output() selectedEmployee = new EventEmitter();
 @Output() closeEvent = new EventEmitter();

  constructor(public utils: UtilityService, private messageService:MessageService) { 
    // console.log("Lifecycle - constructor")
    // console.log("counter",this.counter)
  }
  
  ngOnInit(): void {
    // console.log("Lifecycle - ngOnInit")
    // console.log("UtilityService",this.utils.getCurrentTime())
  }

  triggerOnDataChange() {
    // alert("Hello Data is updated.")
  }
  
  ngOnChanges(){
    // this.triggerOnDataChange();
    // console.log("Lifecycle - NgOnChanges");
    // console.log("counter",this.counter)
  }

  ngOnDestroy(){
    // console.log("Destroy Component");
    // alert("You are closing the card window")
  }

  closeCard(){
    this.closeEvent.emit(false);
  }

  sendData(param1){
    console.log("this",param1);
    this.selectedEmployee.emit(param1);
  }
 
 addToCart(data){
    console.log("addToCart from Card",data);
    this.messageService.sendCartAmount(data);
    this.messageService.sendCartAmount2(data);
  }

  


}
