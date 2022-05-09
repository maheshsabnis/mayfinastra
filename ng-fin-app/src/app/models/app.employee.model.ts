export class Employee {
  // since the Employee class properties will be read dynamically
  // in iteration, so make sure that the Employee class define
  // indexer property like following
  [x:string]:any; // x will be the propertyName which always string
                  // and the type of the property can be number, string, date, ect.
                  // so use 'any' there

  constructor(
    public EmpNo:number,
    public EmpName: string,
    public Designation:string,
    public DeptName:string,
    public Salary:number
  ){}
}
