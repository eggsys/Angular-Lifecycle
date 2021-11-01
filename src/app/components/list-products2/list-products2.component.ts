import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products2',
  templateUrl: './list-products2.component.html',
  styleUrls: ['./list-products2.component.scss']
})
export class ListProducts2Component implements OnInit {

  @Input()  createAt !: any
  i : number = 1
  constructor() { }

  ngOnInit(): void {
    console.log("createAT : ", this.createAt)
    //console.log(JSON.stringify(this.createAt))
  }

}
