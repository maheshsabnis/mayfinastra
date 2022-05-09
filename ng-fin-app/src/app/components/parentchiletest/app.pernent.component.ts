import { Component, OnInit, ViewChild } from '@angular/core';
import { OtheChildComponent } from './app.otherchild.component';

@Component({
  selector: 'app-parent-component',
  template: `
     <h3>Parent Component</h3>
     <div class="container">
        <input type="text" [(ngModel)]="Name"/>
        <hr/>
        <app-child-component [Message]="Name"></app-child-component>
        <hr/>

        <app-otherchild-component #otherChildComponent></app-otherchild-component>
        <hr/>
        <button class="btn btn-warning" (click)="passData()">Pass Value</button>
     </div>
  `
})

export class ParentComponent implements OnInit {
  Name:string;
  // define an instance of the OtherChildComponent using the template reference from HTML
  // #otherChildComponent
  @ViewChild("otherChildComponent")
    otherChildComponent:OtheChildComponent;
  constructor() {
    this.Name = '';
    this.otherChildComponent = new OtheChildComponent();
  }

  ngOnInit() { }
  passData():void {
    this.otherChildComponent.Message = this.Name;
  }
}
