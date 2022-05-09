import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   name:string;
  names:Array<string>;
  selName:string;
  toggle:boolean;

   constructor() {
     this.name = 'The First Component';
     this.names = new Array<string>();
     this.names = ['Tejas', 'Mahesh', 'Rameshrao', 'Ram', 'Sabnis'];
     this.selName = '';
     this.toggle = true;
   }

   display():void {
     this.name = 'The First Component Changed';
   }
   toggleVal():void {
      this.toggle = !this.toggle;
   }
}
