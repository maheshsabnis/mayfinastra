"use strict";
// One Type is set to primitive types then  it cannot be changed
// primitive types : number, string, date, Array<T>, boolean
// Default Type: any, This can have any-type of data
// Method Type: void, represents that nothing is hold or returned by the method
exports.__esModule = true;
function doWork(x) {
    var y = 0;
    // the var scope it as function level by default
    if (x) {
        y = 10; // The Block Scope Declaration
        console.log('True y = ' + y);
    }
    else {
        console.log('False y = ' + y);
    }
}
doWork(true);
doWork(false);
// 1. Implicit Type Definition based on Initial value
var n1 = 100; // The TypeScript will set the n1 to number for whole file
console.log('Type of n1 = ' + typeof (n1) + ' and  Value of n1 = ' + n1);
var n2; // implicit to any
n2 = 200;
console.log('Type of n2 = ' + typeof (n2) + ' and  Value of n2 = ' + n2);
n2 = "Mahesh";
console.log('Type of n2 = ' + typeof (n2) + ' and  Value of n2 = ' + n2);
function validate(n) {
    if (n % 2 === 0)
        return null;
    else {
        return { invalid: true };
    }
}
console.log(validate(3));
console.log(validate(2));
// 2. Explicit Type Definition 
var n3 = 300;
var n4 = "Sabnis";
// String Interpolation aka Template String, where the Multi-Line Strings can be stored into 
// a single string immutable object
// use the back-quote to inform to ES 6 transpiler that the string mutation is implemented into  
//a single string object
var fname = "Mahesh";
var mname = "Ramesherao";
var lname = "Sabnis";
var fullName = "".concat(fname, " ").concat(mname, " ").concat(lname);
// ${EXPRESSION}: This will be evaluated as a 'JS Expression' and will be parsed immediately
// JS Expression: Will implicitly invoke the JS parser for Math Objects, String Object, 
// HTML Parser
console.log(fullName);
console.log("".concat(2 + 3));
function generateUI(source) {
    if (source.length === 0 || source === undefined) {
        return 'No UI is generated';
    }
    else {
        var select_1 = "<select>";
        source.forEach(function (v, i) {
            select_1 += "<option value=\"".concat(v, "\">").concat(v, "</option>");
        });
        select_1 += "</select>";
        return select_1;
    }
}
var data = [10, 20, 30, 40, 50];
var result = generateUI(data);
console.log(result);
