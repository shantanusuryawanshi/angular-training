import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }
  // Shared Service Example
  allCartsProducts:any = [{name: "Shashank Trivedi"}];
  sendCartProducts(data){
    this.allCartsProducts.push(data);
    console.log("allCartsProducts", this.allCartsProducts);
  }

  getCartProducts(){
    console.log("getCartProducts>>")
    return this.allCartsProducts
  }

  // Type of Observable Services Subject, asyncSubject, BeheaviourSubject
  // Subject Example
  private totalCartAmount = new Subject<any>();
  sendCartAmount(data:any){
    this.totalCartAmount.next(data);
  }

  getCartAmount(){
    return this.totalCartAmount.asObservable();
  }
 
 // Behaviour Subject Example
  private totalCartAmount2 = new BehaviorSubject<any>({
    name: "Virat Kohli"
  });
  sendCartAmount2(data:any){
    this.totalCartAmount2.next(data);
  }

  getCartAmount2(){
    return this.totalCartAmount2.asObservable();
  }

  // ASync Subject
  private totalCartAmount3 = new AsyncSubject<any>();


}
