import { Component, OnInit } from '@angular/core';
import {DepartmentClient} from './../../models/app.department.model';
import {ResponseData} from './../../models/app.response.model';
import {HttpService} from './../../services/app.http.service';
@Component({
  selector: 'app-httpcall-component',
  templateUrl: './app.httpcall.view.html'
})

export class HttpCallComponent implements OnInit {
  departments:Array<DepartmentClient>;
  message:string;
  // inject the service
  constructor(private serv:HttpService) {
    this.departments = new Array<DepartmentClient>();
    this.message = '';
  }

  // Get the data when the component's constructor completes its execution
  ngOnInit() {
    this.loadData();
  }

   loadData():void {
    // call the method from the service
    this.serv.getDepartments().subscribe({
      next:(response:ResponseData)=>{
        this.departments = response.data,
        this.message = response.message
      }, // return the state received as success
      error:(error:any)=>{
        this.message = `Error Occurred ${error}`
      } // return the state received as error
    });
  }

  saveData():void{
    const dept:DepartmentClient = new DepartmentClient(
      5001, 'Dept_5001', 'Pune', 4500
    );
    this.serv.postDepartment(dept).subscribe({
      next:(response:ResponseData)=>{
        this.departments.push(response.data),
        this.message = response.message
      }, // return the state received as success
      error:(error:any)=>{
        this.message = `Error Occurred ${error}`
      } // return the state received as error
    });
  }
}
