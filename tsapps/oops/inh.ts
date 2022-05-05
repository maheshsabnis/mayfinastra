class Employee {
    private _EmpNo:number = 0;
    private _EmpName:string = '';
    protected _Salary:number = 0;
    
    set EmpNo(val:number) {
        this._EmpNo = val;
    }
    get EmpNo():number{
        return this._EmpNo;
    }
    set EmpName(val:string) {
        this._EmpName = val;
    }
    get EmpName():string{
        return this._EmpName;
    }
    protected set Salary(val:number) {
        this._Salary = val;
    }
    protected get Salary():number{
        return this._Salary;
    }
}

class Manager extends Employee {
    constructor(private _da:number, private _ts:number){
        // Mandatory if the derive class has the constructor
        super(); 
    }
    calculateSalary():number{
        // access the public property of base
        return this._da + this._da + this.Salary;
    }
}

 