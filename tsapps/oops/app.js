// Entity Class or Model class or DTO
var Department = /** @class */ (function () {
    function Department(DeptNo, DeptName, Location, Capacity) {
        this.DeptNo = DeptNo;
        this.DeptName = DeptName;
        this.Location = Location;
        this.Capacity = Capacity;
    }
    return Department;
}());
// Logic Class
var DepartmentLogic = /** @class */ (function () {
    function DepartmentLogic() {
        this.departments = new Array();
    }
    DepartmentLogic.prototype.getDepts = function () {
        return this.departments;
    };
    DepartmentLogic.prototype.addDept = function (dept) {
        this.departments.push(dept);
        return this.departments;
    };
    return DepartmentLogic;
}());
