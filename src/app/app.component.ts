import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // componentId: number = 10;
  // componentStatus: string = 'offLine';
  // getComponentStatus(){
  //   return this.componentStatus;
  // }
  allowNewComponent = false;
  componentStatus = 'No component button was called!';
  inputValue = '';

  constructor(){
    setTimeout(() => {
      this.allowNewComponent = true;
    },2000);
  }

  eventBinding(){
    this.componentStatus = 'Component button is called';
  }

  onUpdateComponentName(event){
    // console.log(event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
  
  ngOnInit(){

  }
}
