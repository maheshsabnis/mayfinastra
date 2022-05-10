import {Department} from './app.department.model';
import {Employee} from './app.employee.model';
export const Designations = ['Director', 'Manager', 'Lead', 'Engineer', 'Clerk'];

export const Departments = ['IT', 'Human Resource', 'Accounts', 'Training', 'Sales'];




export const DepartmentsData:Array<Department> =  new Array<Department>();
DepartmentsData.push(new Department(10, 'IT'));
DepartmentsData.push(new Department(20, 'HRD'));
DepartmentsData.push(new Department(30, 'Sales'));
DepartmentsData.push(new Department(40, 'Accounts'));

export const EmployeesData:Array<Employee> = new Array<Employee>();
EmployeesData.push(new Employee(101, 'A', 'DS1', 'IT', 11111));
EmployeesData.push(new Employee(102, 'B', 'DS1', 'HRD', 11111));
EmployeesData.push(new Employee(103, 'C', 'DS1', 'Sales', 11111));
EmployeesData.push(new Employee(104, 'D', 'DS1', 'Accounts', 11111));
EmployeesData.push(new Employee(105, 'E', 'DS1', 'IT', 11111));
EmployeesData.push(new Employee(106, 'F', 'DS1', 'HRD', 11111));
EmployeesData.push(new Employee(107, 'G', 'DS1', 'Sales', 11111));
EmployeesData.push(new Employee(108, 'H', 'DS1', 'Azzounts', 11111));

