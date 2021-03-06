// Writing the Test for the 'click' event on EmployeeComponent
// While Testing Component make sure that the following objects are present
// 1. If the Component is using Two-Way binding i.e. [(ngModel)], the the test MUST import 'FormsModule'
// 2. If the Component is using a reusable component or Directive, then the test MUST import that component or directive
// 3. If the Component is injected with service, then import the service and extract its instance
// 4. Make sure that all other classes used by COmponent MUST be present in the test if the test method is using them

// ComponentFixture: The class used to check the state change of the component
// based on Binding (Two-Way and Event)
import {TestBed, ComponentFixture} from '@angular/core/testing';

// Import component and its dependencies
import {EmployeeComponent} from './app.employee.component';
import {SelectComponent} from './../reusablecomponents/app.select.component';
import {ColorDirective} from './../../directives/app.color.directive';
import {FormsModule} from '@angular/forms';
import {Employee} from './../../models/app.employee.model';

// enter into the Test-Suite

describe('Employee Component Testing', () => {
  let employeeComponent:EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let button: HTMLElement;

  // Make sure that before the test-case is loaded (it()) al the Testing configuration
  // is loaded and initialized

  beforeEach(() => {
      // get the NgModule for Testing Env
      TestBed.configureTestingModule({
        imports:[FormsModule],
        declarations:[EmployeeComponent, SelectComponent,ColorDirective]
      }).compileComponents();
      // Compile Component with of of its dependencies
      // EmployeeComponent uses following
      // ngModel, this will load FormsModule and then ngModel will be parsed and compiled in HTML
      // The HTML Template of the Component will be parsed and, The 'SelectComponent' with its HTML and
      // ColorDirective will be compiled
  });

  // Once the Component is compiled, means that its is ready for Instance Creation and initial
  // Execution, e.g. Evaluating Constructor and reading properties so that the Data-binding will be
  // evaluated and the HTML will have default values

  beforeEach(()=>{
    // Get the Component from declarations which is instantiated and loaded
    fixture = TestBed.createComponent(EmployeeComponent);
    // Red its instance
    employeeComponent = fixture.componentInstance;
    // set the initial HTML changes based on data-binding
    fixture.detectChanges();
  });

  // Write the Test
  it('the txt must be calculated as 20% of the employee salary',()=>{
    // Arrange: Collect all the objects those are needed for executing the Test case
    // also declare expected result
    let emp = new Employee(0,'','','',0);
    emp.Salary = 40000;
    let expected = '8000';
    // set the value of the employee property of the component
    employeeComponent.employee = emp;
    // Connect to DOM and point to the component's selector to access the button
    const customSelector = fixture.nativeElement;
    // Read the button
    button = customSelector.querySelector('.btn-success');

    // Act: Call the method that is being tested and receive the actual result
    // Lets dispatch the click event on the button, this will evaluate (click) binding on HTML and the
    // save() method of the component will be called
    const clickEvent = button.dispatchEvent(new Event('click'));
    // after the 'save()' method is executed, the 'tax' will be calculated
    // since the 'tax' is public property, the 'ngOnChanges()' will be invoked by the
    // component and this will change the HTML Template and hence the
    // ComponentFixture will detect  changes on HTML template and then we can read value from HTML
    fixture.detectChanges();
    // Assert: Assert the Expected Result with Actual result to verify the test
    // read value from HTML and check with expected result
    expect(customSelector.querySelector('input[disabled]').value).toEqual(expected);
  });


});
