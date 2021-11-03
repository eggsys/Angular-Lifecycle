import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  listproduct: any
  ProductData: any
  test_product: string = "PASS DATA from list-products ---> @input list-product2"
  createAt: any
  formValue !: FormGroup

  constructor(private ProductService: ProductService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      title: [''],
      price: [''],
      quantity: [''],
    })
    this.getAllProduct()

    /*this.ProductService.ListProduct().subscribe(data => {
      this.listproduct = data

    })
    */
  }

  getAllProduct() {
    this.ProductService.ListProduct()
      .subscribe(res => {
        this.listproduct = res;
      })
  }

  deleteProduct(product: any) {
    console.log("call : DELETE")
    this.ProductService.DeleteProduct(product._id)
      .subscribe(res => {
        alert("Product Delete" + res);
        this.getAllProduct();
      })
  }

  UpdateProduct(product : any ){
    console.log("call : Update ")
    this.ProductService.UpdateProduct(product._id)
    //FormComponent.insertForm.control['title'].setValue(product.ProductTitle)

  }

}
