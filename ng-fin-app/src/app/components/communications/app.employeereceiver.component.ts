import { Component, OnInit } from '@angular/core';
import {Employee} from './../../models/app.employee.model';
import {EmployeesData} from './../../models/app.constants';
import {StateService} from './../../services/app.communication.service';
@Component({
  selector: 'app-employeereceiver-component',
  templateUrl: './app.employeereceiver.view.html'
})

export class EmployeeReceiverComponent implements OnInit {
  employees = EmployeesData;
  private serviceValue:any;
  private _FilteredEmployees:Array<Employee>
  // Inject the State Service
  constructor(private serv: StateService) {
    this._FilteredEmployees =  new Array<Employee>();
  }

  // Subscribe to the event raised by the service and receive Event Payload
  // 'One-Time-Subscription'
  ngOnInit() {
    this.serv.notifyState.subscribe((state)=>{
      this.serviceValue = state;
    });
  }

  // Write a read-only property, that will change for every change to the subscribed value
  get FilteredEmployees():Array<Employee>{
    this._FilteredEmployees =  new Array<Employee>();
    if(this.serviceValue === undefined || this.serviceValue.length === 0){
      this._FilteredEmployees = this.employees;
    } else {
      // filter the data
      this._FilteredEmployees = this.employees.filter((emp)=>{
        return emp.DeptName === this.serviceValue;
      });
    }

    return  this._FilteredEmployees;
  }
}
