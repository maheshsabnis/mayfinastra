import { Component, OnInit } from '@angular/core';
import {Employee} from './../../models/app.employee.model'
import {FormGroup,FormControl} from '@angular/forms';
// import the LitElement File
import './../../litelements/staticdropdown';


@Component({
  selector: 'app-litelementuser-component',
  templateUrl: './app.litelementuser.view.html'
})

export class ListElementUserComponent implements OnInit {
  message:string;
  information:string;
  pEmployees:Array<Employee>;
  employee:Employee;
  frmEmp:FormGroup;
  constructor() {
    this.message = '';
    this.information = '';
    this.pEmployees = new Array<Employee>();
    this.employee = new Employee(0,'','','',0);
    this.frmEmp = new FormGroup({
      EmpNo: new FormControl(this.employee.EmpNo),
      EmpName:new FormControl(this.employee.EmpName)
    });
  }

  ngOnInit() { }

  update():void {
    this.information = 'The Message from the Parent';
  }

  saveEmp():void {
    this.employee = this.frmEmp.value;
    this.pEmployees.push(this.employee);
    console.log(JSON.stringify(this.pEmployees));

  }

  // a method that will receive data from LitElement
  // This MUST accept the 'Event' object to receive the Payload Emitted from the LitElement
  onChange(event:Event): void{
    this.message = (event as CustomEvent<any>).detail;
  }
}
