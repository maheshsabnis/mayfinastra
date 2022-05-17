import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpService } from './app.http.service';
import { DepartmentClient } from '../models/app.department.model';
import { ResponseData } from '../models/app.response.model';
// create a dummy data for test
const dummyDepartmentsResponse: Array<DepartmentClient> = [
  { deptno: 20, deptname: 'HR', location: 'Mumbai', capacity: 200 },
  { deptno: 40, deptname: 'AD', location: 'Pune', capacity: 25 },
  { deptno: 50, deptname: 'TP', location: 'Pune', capacity: 25 },
  { deptno: 60, deptname: 'SU', location: 'Pune', capacity: 35 },
  { deptno: 70, deptname: 'MT', location: 'Mumbai', capacity: 55 },
  { deptno: 80, deptname: 'WH', location: 'Mumbai', capacity: 100 },
  { deptno: 90, deptname: 'Stores', location: 'Pune', capacity: 800 },
  { deptno: 21, deptname: 'Dept_21', location: 'Mumbai', capacity: 15 },
  { deptno: 10, deptname: 'IT', location: 'Kolhapur', capacity: 85 },
  { deptno: 30, deptname: 'SL', location: 'Thane', capacity: 95 },
];

const dummyDepartmentDetails = {
  data: { deptno: 130, deptname: 'SL11', location: 'Thane', capacity: 95 },
};

// the test suit
describe('HttpServeice', () => {
  // define the objects
  let injector: TestBed;
  let httpService: HttpService;
  // the mock object to mock all the Http Calls
  let httpMock: HttpTestingController;

  beforeEach(() => {
    //the testing env. configuration
    TestBed.configureTestingModule({
      // manage the Http Mocking Requests using Controller
      // HttpClientTestingModule, will also resolve the HttpClient injection
      // in the actual HttpServeiceService class
      imports: [HttpClientTestingModule],
      // the HttpServiceService will be registered in Testing Module Dependency
      // configuration 'configureTestingModule()' and will get the resolved
      // HttpClient injected in it
      providers: [HttpService],
    });

    // get the Injectables from the TestBed so that the extarnal calls are managed
    injector = getTestBed();
    // get the HttpServiceService instance from the TestBed and create and get
    // of the HttpServiceService for the testing
    // httpService, will have an instance of 'HttpServiceService' class with all of its
    // injected dependencies e.g. 'HttpClient'
    httpService = TestBed.inject(HttpService);
    // define the the Mock for the HttpClientTestingModule to manage Http Calls
    httpMock = TestBed.inject(HttpTestingController);
  });

  // flush all the Http after the calls are over to verify that Http has been executed
  // successfully

  afterEach(() => {
    httpMock.verify();
  });

  // actual test cases
  it('getDepartments() should return array of Departments', () => {
    // calling the getData() method
    // act
    httpService.getDepartments().subscribe({
      next: (response: ResponseData) => {
        //   alert(typeof(response));
        //  alert(typeof(dummyDepartmentsResponse));
        // assertion

        let d = new ResponseData('','','');
        d.data = dummyDepartmentsResponse;

        expect(typeof(response)).toEqual(typeof(dummyDepartmentsResponse));
        expect(response).toEqual(d.data);
      },
    });

    // define mock
    // arrange
    const request = httpMock.expectOne('http://localhost:7011/api/departments');
    expect(request.request.method).toBe('GET');
    // help the request to be flush
    request.flush(dummyDepartmentsResponse);
  });

  it('postDepartment() should POST and return Department', () => {
    // calling the postData() method
    const dept = new DepartmentClient(140, 'Dept_140', 'Mumbai',  12000);
    // act
    httpService.postDepartment(dept).subscribe({

      next: (response:ResponseData)=>{
        alert('a'+ response);
        alert('e' + dept);
        let d = new ResponseData('','','');
        d.data = dept;

        expect(response).toEqual(d.data);
      }
    });
    // define mock
    // arrange
    const request = httpMock.expectOne('http://localhost:7011/api/departments');
    expect(request.request.method).toBe('POST');
    // help the request to be flush
    request.flush(dept);
  });
});
