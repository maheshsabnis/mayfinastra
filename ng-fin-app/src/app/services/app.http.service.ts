import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DepartmentClient} from './../models/app.department.model';
import {ResponseData} from './../models/app.response.model';
@Injectable({
  providedIn:'root'
})
export class HttpService {
  private url:string;
  // Inject HttpClient
  constructor(private http:HttpClient){
    this.url = 'http://localhost:7011/api/departments';
  }
  getDepartments():Observable<ResponseData>{
    let response:Observable<ResponseData>;
    response = this.http.get<ResponseData>(this.url);
    return response;
  }
  getDepartmentbyid(id:number):Observable<ResponseData>{
    let response:Observable<ResponseData>;
    response = this.http.get<ResponseData>(`${this.url}/${id}`);
    return response;
  }
  postDepartment(dept:DepartmentClient):Observable<ResponseData>{
    let response:Observable<ResponseData>;
    response = this.http.post<ResponseData>(`${this.url}`, dept,{
      headers:{
        'Content-Type': 'application/json'
      }
    });
    return response;
  }
  putDepartment(id:number,dept:DepartmentClient):Observable<ResponseData>{
    let response:Observable<ResponseData>;
    response = this.http.put<ResponseData>(`${this.url}/${id}`, dept,{
      headers:{
        'Content-Type': 'application/json'
      }
    });
    return response;
  }
  deleteDepartment(id:number):Observable<ResponseData>{
    let response:Observable<ResponseData>;
    response = this.http.delete<ResponseData>(`${this.url}/${id}`);
    return response;
  }
}
