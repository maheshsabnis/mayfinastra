import { Component, OnInit } from '@angular/core';
import {Department} from './../../models/app.department.model';
import {DepartmentsData} from './../../models/app.constants';
import {StateService} from './../../services/app.communication.service';
@Component({
  selector: 'app-departmentsender-component',
  templateUrl: './app.departmentsender.view.html'
})

export class DepartmentSenderComponent implements OnInit {
  departments = DepartmentsData;
  // Lets inject it
  constructor(private serv:StateService) { }

  ngOnInit() { }

  onRowClick(dept:Department):void {
    // send data to the service and update its state
    this.serv.updateData(dept.DeptName);
  }
}
