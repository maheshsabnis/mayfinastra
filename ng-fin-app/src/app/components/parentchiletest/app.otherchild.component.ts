import { Component, OnInit,Input, OnChanges, AfterViewInit,AfterContentInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-otherchild-component',
  template: `
     <div class="container">
        <h6>Other Child Component</h6>
       <strong>{{Message}}</strong>
     </div>
  `
})

export class OtheChildComponent implements OnInit, OnChanges, AfterViewInit,AfterContentInit {
  private _Message:string;
  constructor() {
    this._Message = '';
    console.log('Child Constructor Called');

  }

  ngOnInit() {
    console.log('Child ngOnInit Called');
  }
 // @Input()
  set Message(val:string){
    this._Message = val;
  }
  get Message():string{
    return this._Message;
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(`ngOnChanges Invoked on OtheChildComponent ${JSON.stringify(changes)}`);
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit Invoked on OtherChildComponent`);
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit Invoked on OtherChildComponent`);
  }
}
