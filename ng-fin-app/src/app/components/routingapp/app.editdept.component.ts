import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ResponseData } from 'src/app/models/app.response.model';
import {DepartmentClient} from './../../models/app.department.model';
import {HttpService} from './../../services/app.http.service';
@Component({
  selector: 'app-editedept-component',
  templateUrl: './app.editdept.view.html'
})

export class EditDeptComponent implements OnInit {
  dept:DepartmentClient;
  deptno:number;
  constructor(private serv:HttpService, private act:ActivatedRoute) {
    this.dept = new DepartmentClient(0,'','',0);
    this.deptno = 0;
  }
  clear():void{
    this.dept = new DepartmentClient(0,'','',0);
  }
  save():void{
    // The Logic for call to update to service
  }
  // subscribe to the Route and read its parameter
  ngOnInit() {
    this.act.params.subscribe((param)=>{
      this.deptno = param['id']; // use the parameter specified into the route expression
      // receive data from the service
      this.serv.getDepartmentbyid(this.deptno).subscribe({
          next:(response:ResponseData)=>{
            this.dept = response.data;
          },
          error:(error)=>{
            console.log(`Error Occurred ${error}`);

          }
      });
    });
  }
}
