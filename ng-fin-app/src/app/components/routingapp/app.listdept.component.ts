import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseData } from 'src/app/models/app.response.model';
import {DepartmentClient} from './../../models/app.department.model';
import {HttpService} from './../../services/app.http.service';
@Component({
  selector: 'app-listdept-component',
  templateUrl: './app.listdept.view.html'
})

export class ListDeptComponent implements OnInit {
  depts: Array<DepartmentClient>;
  constructor(private serv:HttpService, private router:Router) {
    this.depts  = new Array<DepartmentClient>();
  }

  ngOnInit() {
     this.serv.getDepartments().subscribe({
       next:(response:ResponseData)=>{
         this.depts = response.data;
       },
       error:(error:any)=>{
         console.log(`Error Occurred ${error}`);
       }
     });
  }

  navigateEdit(id: number):void {
    // the first paramter is URL path and second onwards are parameters
    this.router.navigate(['edit', id]);
  }
}
