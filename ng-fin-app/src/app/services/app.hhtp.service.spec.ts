//TestBed: Initialize an environment for Testing Angular Object Model
// getTestBed: Uses to extract registered objects in the Testing Environment
import { TestBed, getTestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { DepartmentClient } from './../models/app.department.model';
import { HttpService } from './app.http.service';
import { ResponseData } from './../models/app.response.model';

// Lets have  the Test Data for testing get calls

const testData = [
  { deptno: 20, deptname: 'HR', location: 'Mumbai', capacity: 200 },
  { deptno: 40, deptname: 'AD', location: 'Pune', capacity: 25 },
  { deptno: 50, deptname: 'TP', location: 'Pune', capacity: 25 },
  { deptno: 60, deptname: 'SU', location: 'Pune', capacity: 35 },
  { deptno: 70, deptname: 'MT', location: 'Mumbai', capacity: 55 },
  { deptno: 80, deptname: 'WH', location: 'Mumbai', capacity: 100 },
  { deptno: 90, deptname: 'Stores', location: 'Pune', capacity: 800 },
  { deptno: 21, deptname: 'Dept_21', location: 'Mumbai', capacity: 15 },
  { deptno: 10, deptname: 'IT', location: 'Kolhapur', capacity: 85 },
  { deptno: 30, deptname: 'SL', location: 'Thane', capacity: 95 }
];

// create a test suit

describe('Testing Angular Service Which Makes HTTP Calls',()=>{
   let injector: TestBed;
   let httpService:HttpService;
   let httpMock:HttpTestingController;



   // Lets initialize the testing Environment
   // 1. Configure Testing Module
   // 2. Receive the Injectable objects those are registered in Dependency Container on Testing Module
   // 3. Define a Mock Object so that HTTP Calls can be mocked
   beforeEach(() => {
     // 1.
      TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[HttpService] // the DI Container
      });
      // arrange
      // 2.
      httpService  = TestBed.inject(HttpService);
      // 3.
      httpMock = TestBed.inject(HttpTestingController);
   });


   // 4. Make sure that after each test case is done with its operations
   // verify the Mock

   afterEach(()=>{
     httpMock.verify();
   });

   // the test case GET Call
   it('should return an array of DepartmentClient for get call',()=>{
      httpService.getDepartments().subscribe({
        next:(response:ResponseData)=>{
            console.log(`response received ${response}`);

            let resp = new ResponseData('','','');
            resp.data = testData;
           expect(response).toEqual(resp.data);
        }
      });

      // Mock the communication
      const request = httpMock.expectOne('http://localhost:7011/api/departments');
      // setting the Http Method
      expect(request.request.method).toBe('GET');
      // Make sure that after the mock does  its job flus the data stored in memory
      request.flush(testData);
   });

    // the test case POST Call
    it('should return an array of DepartmentClient for get call',()=>{
      let dept = new DepartmentClient(130, 'Dept_130', 'Mumbai', 23444);
      httpService.postDepartment(dept).subscribe({
        next:(response:ResponseData)=>{
            console.log(`response received ${response}`);
            // Expected data
            let resp = new ResponseData('','','');
            resp.data = dept;
            // actual to mEqual expectation
           expect(response).toEqual(resp.data);
        }
      });

      // Mock the communication
      const request = httpMock.expectOne('http://localhost:7011/api/departments');
      // setting the Http Method
      expect(request.request.method).toBe('POST');
      // Make sure that after the mock does  its job flus the data stored in memory
      request.flush(dept);
   });

});
