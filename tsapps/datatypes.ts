// One Type is set to primitive types then  it cannot be changed
// primitive types : number, string, date, Array<T>, boolean
// Default Type: any, This can have any-type of data
// Method Type: void, represents that nothing is hold or returned by the method

import { setTokenSourceMapRange } from "typescript";

function doWork(x):void {
    let y = 0;
    // the var scope it as function level by default
    if(x){
        y = 10;  // The Block Scope Declaration
        console.log('True y = ' + y);
    } else {
        console.log('False y = ' + y);
    }
    
}

doWork(true);
doWork(false);



// 1. Implicit Type Definition based on Initial value
let n1 = 100; // The TypeScript will set the n1 to number for whole file
console.log('Type of n1 = ' + typeof(n1) + ' and  Value of n1 = ' + n1);

let n2; // implicit to any
n2 = 200;
console.log('Type of n2 = ' + typeof(n2) + ' and  Value of n2 = ' + n2);
n2 = "Mahesh";
console.log('Type of n2 = ' + typeof(n2) + ' and  Value of n2 = ' + n2);

function validate(n:number):any{
    if(n % 2 === 0) return null;
    else{
        return {invalid:true}; 
    }
}
console.log(validate(3));
console.log(validate(2));

// 2. Explicit Type Definition 
let n3:number = 300;
let n4:string = "Sabnis";
// String Interpolation aka Template String, where the Multi-Line Strings can be stored into 
// a single string immutable object
// use the back-quote to inform to ES 6 transpiler that the string mutation is implemented into  
//a single string object

let fname:string = "Mahesh";
let mname:string = "Ramesherao";
let lname:string = "Sabnis";

let fullName = `${fname} ${mname} ${lname}`;
// ${EXPRESSION}: This will be evaluated as a 'JS Expression' and will be parsed immediately
// JS Expression: Will implicitly invoke the JS parser for Math Objects, String Object, 
// HTML Parser
console.log(fullName);
console.log(`${2+3}`);

function generateUI(source:Array<number>):string{
    if(source.length ===0 || source === undefined){
        return 'No UI is generated';
    } else {
        let select = `<select>`;
        source.forEach(function(v,i){
            select += `<option value="${v}">${v}</option>`;
        });
        select += `</select>`;
        return select;
    }
}
let data:Array<number> = [10,20,30,40,50];

let result = generateUI(data);
console.log(result);
