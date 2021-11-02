import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormModel } from './form.model';
import { CrudService } from '../../api/crud.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  insertForm: FormGroup
  productModelObj: FormModel = new FormModel()

  constructor(public formbuilder: FormBuilder, private api: CrudService) {
    this.insertForm = this.formbuilder.group({
      title: formbuilder.control('', [Validators.required]),
      price: formbuilder.control('', [Validators.min(0)]),
      quantity: formbuilder.control('', [Validators.min(0)]),


    })

  }

  public onSubmit() {
    console.log(this.insertForm.value)
  }

  public control(name: string) {
    return this.insertForm.get(name)
  }

  postProductDetail() {
    this.productModelObj.ProductTitle = this.insertForm.value.title
    this.productModelObj.ProductPrice = this.insertForm.value.price
    this.productModelObj.ProductQuantity = this.insertForm.value.quantity
    this.api.postProduct(this.productModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Product Add !")
        this.insertForm.reset()
      },
        err => {
          alert("Something went wrong" + err)
        })
  }

  ngOnInit(): void {
  }

}
