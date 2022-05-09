import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './app.select.view.html'
})

export class SelectComponent implements OnInit {
  private _DataSource:Array<any>;
  _SelectedValue:any;
  @Output()
  notify:EventEmitter<any>;

  constructor() {
    this._DataSource = new Array<any>();
    this.notify = new EventEmitter<any>();
  }

  ngOnInit() { }
  @Input()
  set DataSource(val:Array<any>){
    this._DataSource = val;
  }
  get DataSource():Array<any>{
    return this._DataSource;
  }

  @Input()
  set SelectedValue(val:any){
    this._SelectedValue = val;
  }
  get SelectedValue():any{
    return this._SelectedValue;
  }

  // bind this method in HTML template
  onChange(val:any):void {
    this.notify.emit(val);
  }
}
