import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DepartmentClient} from '../models/app.department.model';
import {ResponseData,User} from '../models/app.response.model';
@Injectable({
  providedIn:'root'
})
export class HttpSecureService {
  private url:string;
  // Inject HttpClient
  constructor(private http:HttpClient){
    this.url = 'http://localhost:7011';
  }


  registerUser(user:User):Observable<ResponseData>{
    let response:Observable<ResponseData>;
    response = this.http.post<ResponseData>(`${this.url}/api/register`, user,{
      headers: {
          'Content-Type': 'application/json'
      }
    });
    return response;
  }
  authUser(user:User):Observable<ResponseData>{
    let response:Observable<ResponseData>;
    response = this.http.post<ResponseData>(`${this.url}/api/authuser`, user,{
      headers: {
          'Content-Type': 'application/json'
      }
    });
    return response;
  }

  getDepartments():Observable<ResponseData>{
    let response:Observable<ResponseData>;
    response = this.http.get<ResponseData>(`${this.url}/api/departments`);
    return response;
  }

}
