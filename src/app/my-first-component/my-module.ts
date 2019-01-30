import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyFirstComponentComponent } from './my-first-component.component';

@NgModule({
    declarations: [MyFirstComponentComponent],
    imports: [
        BrowserModule
      ],
      providers: [],
      bootstrap: [MyFirstComponentComponent]
})

export class MyModule {}