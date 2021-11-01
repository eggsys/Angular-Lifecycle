import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.scss']
})
export class OnewaybindingComponent implements OnInit {
  title: string = "This is one way title"
  constructor() { }

  ngOnInit(): void {
  }




}
