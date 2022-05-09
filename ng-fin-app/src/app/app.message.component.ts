import {Component, OnInit} from '@angular/core';
@Component({
  selector:'app-message-component',
  template:`
    <h5>I am the Child Message Component</h5>
  `
})
export class MessageComponent implements OnInit{
  constructor(){
     console.log(`Message Component is instantiated`);
  }

  // Method that will be executed immediately after the Constructor
  ngOnInit(): void {
    console.log(`Message Component ngOnInit is called`);
  }
}
