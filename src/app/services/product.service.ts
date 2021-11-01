import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BaseUrl:String = 'http://localhost:1337/api/';
  //BaseUrl:String = 'https://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient) { }

  ListProduct(){
      let a = this.http.get(this.BaseUrl+'products')
      console.log(a)
      return a
  }
}
