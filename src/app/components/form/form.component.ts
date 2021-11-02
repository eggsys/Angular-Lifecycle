import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  insertForm : FormGroup
  constructor(private formbuilder:FormBuilder) { 
    this.insertForm = this.formbuilder.group({
      title: formbuilder.control('', [Validators.required]),
      price: formbuilder.control('', [Validators.min(0)]),
      quantity: formbuilder.control('' , [Validators.min(0)]),

      
    })

  }

  public onSubmit(){
    console.log(this.insertForm.value)
  } 

  public control(name:string){
    return this.insertForm.get(name)
  }

  ngOnInit(): void {
  }

}
