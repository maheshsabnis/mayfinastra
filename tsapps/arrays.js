var names = new Array();
names.push('James Bond');
names.push('Ethan Hunt');
names.push('Indiana Jones');
names.push('Json Bourn');
names.push('Jack Reacher');
names.push('James Bond');
names.push('Ethan Hunt');
names.push('Indiana Jones');
names.push('Json Bourn');
names.push('Jack Reacher');
var frequency = names.reduce(function (prevRec, curRec) {
    console.log("Prev = ".concat(JSON.stringify(prevRec), ", cur = ").concat(JSON.stringify(curRec)));
    if (curRec in prevRec) {
        prevRec[curRec]++;
    }
    else {
        prevRec[curRec] = 1;
    }
    return prevRec;
}, {});
console.log(frequency);
// print only those elements having size more than 12
names.forEach(function (name, index) {
    if (name.length >= 12) {
        console.log("Name = ".concat(name));
    }
});
var res = names.map(function (name, index) {
    if (name.length >= 12) {
        return name;
    }
});
console.log("Original Array = ".concat(JSON.stringify(names), " and length of names  = ").concat(names.length));
console.log("After map with condition Array = ".concat(JSON.stringify(res), " and length of res = ").concat(res.length));
var resFilter = names.filter(function (name, index) {
    if (name.length >= 12) {
        return name;
    }
});
console.log("Filtered Value is = ".concat(JSON.stringify(resFilter)));
var data = new Array();
data.push(10);
data.push(20);
data.push(30);
data.push(40);
data.push(50);
var sum = 0;
data.forEach(function (n, i) {
    sum += n;
});
console.log(sum);
var result = data.reduce(function (prevSum, curVal, index, val) {
    console.log("PrevSum = ".concat(prevSum, ", curVal = ").concat(curVal, ", index = ").concat(index, ", val = ").concat(val));
    // implementation
    return prevSum + curVal;
});
console.log("Sum using reduce is = ".concat(result, " "));
// class: Each data member, property and method is public by default 
// if want to define a member, property, method as private then define it explicitly 
// The 'constructor()' is a Standard method
// Members are accessible within class using 'this' scope object
var Employee = /** @class */ (function () {
    function Employee(eno, ename, dname) {
        this._EmpNo = eno;
        this._EmpName = ename;
        this._DeptName = dname;
    }
    return Employee;
}());
// define an array of class because Array is generic
var employees = new Array();
employees.push(new Employee(101, 'Tejas', 'IT'));
employees.push(new Employee(102, 'Mahesh', 'HR'));
employees.push(new Employee(103, 'Ramesh', 'IT'));
employees.push(new Employee(104, 'Ram', 'HR'));
