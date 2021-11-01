import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  listproduct : any
  test_product :string = "PASS DATA from list-products ---> @input list-product2"
  createAt : any
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.ListProduct().subscribe(data =>{
      this.listproduct = data     
      
    })  
    
  }

}
