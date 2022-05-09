import {Employee} from './app.employee.model';

export class Logic {
  private employees:Array<Employee>;

  constructor(){
    this.employees = new Array<Employee>();
    this.employees.push(new Employee(101, 'Mahesh', 'Director', 'IT', 100000));
    this.employees.push(new Employee(102, 'Tejas', 'Manager', 'Sales', 50000));
  }

  getEmployees():Array<Employee>{
    return this.employees;
  }
  addEmployee(emp:Employee):Array<Employee>{
    this.employees.push(emp);
    return this.employees;
  }
}
