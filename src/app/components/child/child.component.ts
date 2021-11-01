import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ViewChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent
  implements
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  counter: number = 0;
  interval: any;

  @Input()
  channelName !: "";
  @ContentChild('projectContent', { static: false }) projectContent: any;
  @ViewChild('childContent', { static: false }) childContent: any;
 // false is basic config


  constructor() {
    console.log("child constructor")
  }




  ngOnInit(): void {
    console.log("Child init is called")
    console.log("OnInit - " + this.projectContent)
    console.log("OnInit - " + this.childContent)


    /* this.interval = setInterval(() => {
      this.counter = this.counter + 1
      console.log(this.counter)
    }, 1000) */
  }

  ngOnDestroy() {
    clearInterval(this.interval)
    console.log("Child Destroyed")
  }



  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("Child OnChanges is called")
    console.log("OnChanges - " + this.projectContent)
    console.log("OnChanges - " + this.childContent)

  }

  ngDoCheck(): void {
    console.log("Child  DoCheck is called")
    console.log("DoCheck - " + this.projectContent)
    console.log("DoCheck - " + this.childContent)

  }

  ngAfterContentInit() {
    console.log("in AftercontentInit")
    console.log("AfterContent Init - " + this.projectContent)
    console.log("AfterContent Init - " + this.childContent)


  }

  ngAfterContentChecked(): void {
    console.log("in ngAfterContentChecked")
    console.log("AfterContentChecked - " + this.childContent)


  }

  ngAfterViewInit() {
    console.log("in ngAfterView Init")
    console.log("in ngAfterView Init - " + this.childContent)


  }

  ngAfterViewChecked() {
    console.log("in ngAfterView Checked")
    console.log("in ngAfterView Checked - " + this.childContent)


  }

}
