import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private httpReq: HttpClient) { }
  
  // REST API With External API - GET Call
  getPostData(): Observable<any> {
    return this.httpReq.get<any>('http://localhost:3000/posts');
  }
  getUsers(): Observable<any> {
    return this.httpReq.get<any>('https://jsonplaceholder.typicode.com/users');
  }
  
  // REST API with JSON FILE - GET Call
  getProducts(): Observable<any> {
    return this.httpReq.get<any>('assets/data/products.json');
  }
  // REST API with JSON FILE - GET Call
  postUserData(data): Observable<any> {
    return this.httpReq.post<any>('http://localhost:3000/posts', data
    );
  }

}
