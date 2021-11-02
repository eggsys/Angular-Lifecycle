import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BaseUrl: String = 'http://localhost:1337/api/';
  //BaseUrl:String = 'https://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient) { }

  ListProduct() {
    let a = this.http.get(this.BaseUrl + 'products')
    console.log(a)
    return a
  }


  DeleteProduct(product: any) {
    console.log("service delete : ", product)
    return this.http.delete(this.BaseUrl + 'products/' + product)
      .pipe(map((res: any) => {
        console.log(res)
        return res;
      }))
  }



  DeleteProduct2(product: any) {
    console.log("service delete : ", product)
    let b = this.http.delete(this.BaseUrl + 'products/' + product)
    console.log(b)
    return b
  }

  UpdateProduct(product: any) {
    console.log("service update : ", product)
  }
}
