import { Component, OnInit, OnChanges, Input, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import Data from './data/data';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // styles: ['h1 { color: green; }']
})
// NgOnChanges, Constructor, NgOnInit, ngDoCheck, 
// ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy


export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  title = 'Welcome to Hello World Component';
  sallary = "10 Lacs";
  selectedData;
  employess = Data.employess;
  hiddenCard = true;
  counter = 0;
  constructor(public messageService:MessageService){
    // console.log("Lifecycle - constructor")
  }
  
  getSelectedEmployeeData(data){
    this.selectedData = data;
  }
 
  closeCardWindow(data){
    this.hiddenCard = data;
  }

  // openCardBox(){
  //   this.hiddenCard = !this.hiddenCard;
  // }
  
  ngOnInit(){
    // console.log("Lifecycle - ngOnInit")
    
  //   setInterval(()=>{
  //     console.log("setInterval")
  //   }, 4000);
  }
  
  ngDoCheck(){
    // console.log("Lifecycle - ngDoCheck")
  }
  
  ngAfterContentInit(){
    // console.log("Lifecycle - AfterContentInit")
  }
  
  ngAfterContentChecked(){
    // console.log("Lifecycle - ngAfterContentChecked")
  }
 
  
  ngAfterViewInit(){
    // console.log("Lifecycle - ngAfterViewInit")
  }
  
  ngAfterViewChecked(){
    // console.log("Lifecycle - ngAfterViewChecked")
  }
  
 
  
}
