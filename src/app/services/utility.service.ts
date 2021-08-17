import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  constructor() { }

  getCurrentTime(){
    return new Date()
  };
  
  getColorsData(param?){
    let arr:any = [];
    if(param == 'color'){
      arr = ["red","green", "orange"]
    } else{
      arr = ["Apple", "Banana", "Grapes"] 
    }
    return arr;
  }

}
