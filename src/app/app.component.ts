import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allowNewComponent = false;
  componentStatus = 'No component button was called!';
  inputValue = 'Test component';
  componentCreated = false;

  constructor(){
    setTimeout(() => {
      this.allowNewComponent = true;
    },2000);
  }

  eventBinding(){
    this.componentCreated = true;
    this.componentStatus = 'Component button is called and the Name is ' + this.inputValue;
  }

  onUpdateComponentName(event){
    // console.log(event);
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
  
  ngOnInit(){

  }
}
