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
names.push('Jack Reacher');
var frequency = names.reduce(function (prevRec, curRec) {
    console.log("Prev = ".concat(JSON.stringify(prevRec), ", cur = ").concat(JSON.stringify(curRec)));
    if (curRec in prevRec) {
        prevRec[curRec]++; // increase the frequency
    }
    else {
        prevRec[curRec] = 1;
    }
    return prevRec;
}, {}); // default value for prevRec 
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
var emps = [
    { eno: 1, ename: 'A1', dname: 'D1' },
    { eno: 2, ename: 'A2', dname: 'D2' },
    { eno: 3, ename: 'A3', dname: 'D1' },
    { eno: 4, ename: 'A4', dname: 'D2' },
    { eno: 5, ename: 'A5', dname: 'D2' },
    { eno: 6, ename: 'A6', dname: 'D1' },
    { eno: 7, ename: 'A7', dname: 'D3' },
    { eno: 8, ename: 'A8', dname: 'D4' },
    { eno: 9, ename: 'A9', dname: 'D1' },
    { eno: 10, ename: 'A10', dname: 'D3' }
];
// When there is JSON object read its keys to process it using Object.keys()
// OR Object[property] to extract value from the object
var properties = Object.keys(emps[0]);
console.log(JSON.stringify(properties));
var obj = emps[0];
console.log(obj['ename']);
// lets go for defining groups of employees based on 'specific property of employee object'
// e.g. dname
function createGroup(records, property) {
    // groupObject: The object where group result will be stored
    // record: Each iterated record from the 'records'  array 
    var result = records.reduce(function (groupObject, record) {
        // get the value of the group property of the current record
        var keyValue = record[property];
        console.log("Current Group Key Value is = ".concat(keyValue));
        // match the record in groupObject base on the key value
        if (!groupObject[keyValue]) {
            // the resultant object is empty
            groupObject[keyValue] = [];
        }
        // else push the matched record into the groupObject
        groupObject[keyValue].push(record);
        console.log("After the Match Found the group has value as = ".concat(JSON.stringify(groupObject)));
        return groupObject; // closure that is returning the latest state on inner function
    }, {});
    return result;
}
var groups = createGroup(emps, 'ename');
console.log("Groups are ".concat(JSON.stringify(groups)));
