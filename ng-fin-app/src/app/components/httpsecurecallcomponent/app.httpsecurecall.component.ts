import { Component, OnInit } from '@angular/core';
import { HttpSecureService } from 'src/app/services/app.httpsecure.service';
import {DepartmentClient} from '../../models/app.department.model';
import {ResponseData,User} from '../../models/app.response.model';
import {forkJoin} from 'rxjs';
@Component({
  selector: 'app-httpsecurecall-component',
  templateUrl: './app.httpsecurecall.view.html'
})

export class HttpSecureCallComponent implements OnInit {
  departments:Array<DepartmentClient>;
  message:string;
  // inject the service
  constructor(private serv:HttpSecureService) {
    this.departments = new Array<DepartmentClient>();
    this.message = '';
  }

  // Get the data when the component's constructor completes its execution
  ngOnInit() {
  //   response1 = this.serv1.method1();
  //   rerspons2 = this.se2v2.Method1();
  //   forkJoin([response1,response2]).subscribe(responses => {
  //      let result1 = responses[0];
  //      let result2 = responses[1];
  // });
  }

  regNewUser():void {
    const user:User = new User('user1234', '123');
    this.serv.registerUser(user).subscribe({
      next:(response:ResponseData)=>{
        this.message = response.message;
      },
      error:(error:any)=>{
        this.message = `Error Occurred ${error}`;
      }
    });
  }
  loginUser():void {
    const user:User = new User('user1234', '123');
    this.serv.authUser(user).subscribe({
      next:(response:ResponseData)=>{
        this.message = response.message;
        // save token into the session storage
        sessionStorage.setItem('token', response.token);
      },
      error:(error:any)=>{
        this.message = `Error Occurred ${error}`;
      }
    });
  }

  getData():void{
     this.serv.getDepartments().subscribe({
       next:(response:ResponseData)=>{
         this.departments = response.data;
         this.message = response.message;
       },
       error:(error:any)=>{
         this.message = `Error Occurred ${error}`;
       }
     });
  }
}
