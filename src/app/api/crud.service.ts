import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http : HttpClient) { }

  postProduct(data:any){
    return this.http.post<any>("http://localhost:1337/api/product",data)
    .pipe
  }

}
