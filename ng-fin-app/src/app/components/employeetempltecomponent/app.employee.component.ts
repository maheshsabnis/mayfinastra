import { Component, OnInit } from '@angular/core';
import {Employee} from './../../models/app.employee.model';
import {Departments,Designations} from './../../models/app.constants';
import {Logic} from './../../models/app.logic';
@Component({
  selector: 'app-employee-component',
  templateUrl: './app.employee.view.html'
})

export class EmployeeComponent implements OnInit {
  employee:Employee;
  employees:Array<Employee>;
  private logic:Logic;
  columnHeaders:Array<string>;
  color:string;
  tax:number;
  // assign data from COnstants to local public data members so that they can be used
  // on UI
  departments = Departments;
  designations = Designations;
  constructor() {
    this.employee = new Employee(0,'','','',0);
    this.employees = new Array<Employee>();
    this.logic = new Logic();
    this.columnHeaders = new Array<string>();
    this.color = '';
    this.tax = 0;
  }

  // call getEMployees() to read Employees
  ngOnInit() {
    this.employees = this.logic.getEmployees();
    // read all keys from Employee class instance
    this.columnHeaders = Object.keys(this.employee);

  }

  clear():void {
    this.employee = new Employee(0,'','','',0);
  }
  save():void{
    this.employees = this.logic.addEmployee(this.employee);
    this.tax = this.employee.Salary * 0.2;
  }
  getSelectedEmp(e:Employee):void {
    // clone the object
    this.employee = Object.assign({},e);
  }
  getDeptName(event:any):void {
    this.employee.DeptName = event;
    console.log(`DeptName ${event}`);
  }
  getDesignation(event:any):void {
    this.employee.Designation = event;
    console.log(`Designation ${event}`);
  }
}
