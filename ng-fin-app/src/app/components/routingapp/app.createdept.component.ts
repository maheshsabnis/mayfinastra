import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ResponseData } from 'src/app/models/app.response.model';
import {DepartmentClient} from './../../models/app.department.model'
import {HttpService} from './../../services/app.http.service'
@Component({
  selector: 'app-createdept-component',
  templateUrl: './app.createdept.view.html'
})

export class CreateDeptComponent implements OnInit {
  dept:DepartmentClient;

  constructor(private serv:HttpService, private router:Router) {
    this.dept = new DepartmentClient(0,'','',0);
  }

  clear():void{
    this.dept = new DepartmentClient(0,'','',0);
  }
  save():void{
    this.serv.postDepartment(this.dept).subscribe({
      next:(response:ResponseData)=>{
          // navigate to the Default List Department Page
          this.router.navigate(['']);
      },
      error:(error:any)=>{
        console.log(`Error Occurred ${error}`);
      }
    });
  }
  ngOnInit() { }
}
