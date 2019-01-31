import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styles: [`
  .online {color: white;}
  `]
})
export class MyFirstComponentComponent implements OnInit {
  componentId: number = 10;
  componentStatus: string = 'offLine';
  
  ngOnInit() {
  }

  constructor() {
    this.componentStatus = Math.random() > 0.5 ? 'onLine' : 'offLine' ;
   }

  getComponentStatus(){
    return this.componentStatus;
  }

  getColor(){
    return this.componentStatus === 'onLine' ? 'Green' : 'Red' ;
  }

  clickMe(){
    if(this.clickMe){
      var a = new Date();
      alert(a);
    }
  }
}
