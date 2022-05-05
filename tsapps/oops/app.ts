// Entity Class or Model class or DTO
class Department {
  constructor(
    public DeptNo: number,
    public DeptName: string,
    public Location: string,
    public Capacity: number
  ) {}
}
// Logic Class
class DepartmentLogic {
    private departments: Array<Department>;
    constructor(){
        this.departments = new Array<Department>();
    }

    getDepts():Array<Department>{
        return this.departments;
    }
    addDept(dept:Department):Array<Department>{
        this.departments.push(dept);
        return this.departments;
    }
}