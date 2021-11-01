import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  counter: number = 0;
  interval: any;

  @Input()
  channelName !: "";


  constructor() {
    console.log("child constructor")
  }



  ngOnInit(): void {
    console.log("Child init")

    /* this.interval = setInterval(() => {
      this.counter = this.counter + 1
      console.log(this.counter)
    }, 1000) */
  }

  ngOnDestroy() {
    clearInterval(this.interval)
    console.log("Child Destroyed")
  }

  ngDoCheck(): void {
    console.log("Child  DoCheck is called")
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("Child OnChanges is called")
  }

}
