import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import {Employee} from '../../models/app.employee.model';
import {Departments,Designations} from '../../models/app.constants';
import {Logic} from '../../models/app.logic';
import {CustomValidator} from './app.custom.validator';

@Component({
  selector: 'app-employeereactiveform-component',
  templateUrl: './app.employeereactiveform.view.html'
})

export class EmployeeReactiveFormComponent implements OnInit {
  employee:Employee;
  employees:Array<Employee>;
  private logic:Logic;
  columnHeaders:Array<string>;

  departments = Departments;
  designations = Designations;

  frmEmp:FormGroup;

  constructor() {
    this.employee = new Employee(0,'','','',0);
    this.employees = new Array<Employee>();
    this.logic = new Logic();
    this.columnHeaders = new Array<string>();

    // instantiate the frmEmp using the FormGroup and mpa public properties of Employee Model class
    // with FormControl so that they can be used by Editable elements on UI
    this.frmEmp = new FormGroup({
      EmpNo:new FormControl(this.employee.EmpNo, Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(8),
        Validators.pattern('[0-9]+'),
        CustomValidator.checkEven // Custom Validator
      ])),
      EmpName: new FormControl(this.employee.EmpName),
      Designation: new FormControl(this.employee.Designation),
      DeptName: new FormControl(this.employee.DeptName),
      Salary: new FormControl(this.employee.Salary)
    });

  }

  // call getEMployees() to read Employees
  ngOnInit() {
    this.employees = this.logic.getEmployees();
    // read all keys from Employee class instance
    this.columnHeaders = Object.keys(this.employee);

  }

  clear():void {
    this.employee = new Employee(0,'','','',0);
    this.frmEmp.setValue(this.employee);
  }
  save():void{
    this.employee = this.frmEmp.value;
    this.employees = this.logic.addEmployee(this.employee);
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
