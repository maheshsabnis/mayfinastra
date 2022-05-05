let names:Array<string> = new Array<string>();
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

let frequency = names.reduce((prevRec:any, curRec:string)=>{
    console.log(`Prev = ${JSON.stringify(prevRec)}, cur = ${JSON.stringify(curRec)}`);
    if(curRec in prevRec){
        prevRec[curRec]++; // increase the frequency
    } else {
        prevRec[curRec] = 1;
    }
    return prevRec
},{}); // default value for prevRec 

console.log(frequency);





// print only those elements having size more than 12
names.forEach((name,index)=>{
    if(name.length >= 12){
        console.log(`Name = ${name}`);
    }
});

let res = names.map((name,index)=>{
    if(name.length >= 12){
        return name;
    }
});

console.log(`Original Array = ${JSON.stringify(names)} and length of names  = ${names.length}`);
console.log(`After map with condition Array = ${JSON.stringify(res)} and length of res = ${res.length}`);

let resFilter = names.filter((name,index)=>{
    if(name.length >= 12){
        return name;
    }
});
console.log(`Filtered Value is = ${JSON.stringify(resFilter)}`);




let data:Array<number> = new Array<number>();
data.push(10);
data.push(20);
data.push(30);
data.push(40);
data.push(50);

let sum = 0;
data.forEach((n,i)=>{
    sum+=n;
});

console.log(sum);

let result = data.reduce((prevSum,curVal,index,val)=>{
    console.log(`PrevSum = ${prevSum}, curVal = ${curVal}, index = ${index}, val = ${val}`);
     // implementation
    return prevSum + curVal;
});
console.log(`Sum using reduce is = ${result} `);






// class: Each data member, property and method is public by default 
// if want to define a member, property, method as private then define it explicitly 
// The 'constructor()' is a Standard method
// Members are accessible within class using 'this' scope object
// class Employee{
//     private _EmpNo:number;
//     private _EmpName: string;
//     private _DeptName:string;

//     constructor(eno:number, ename:string, dname:string){
//         this._EmpNo  = eno;
//         this._EmpName = ename;
//         this._DeptName = dname;
//     }
// }
// define an array of class because Array is generic

let employees:Array<Employee> = new Array<Employee>();
employees.push(new Employee(101, 'Tejas', 'IT'));
employees.push(new Employee(102, 'Mahesh', 'HR'));
employees.push(new Employee(103, 'Ramesh', 'IT'));
employees.push(new Employee(104, 'Ram', 'HR'));


let emps = [
    {eno:1,ename:'A1', dname:'D1'},
    {eno:2,ename:'A2', dname:'D2'},
    {eno:3,ename:'A3', dname:'D1'},
    {eno:4,ename:'A4', dname:'D2'},
    {eno:5,ename:'A5', dname:'D2'},
    {eno:6,ename:'A6', dname:'D1'},
    {eno:7,ename:'A7', dname:'D3'},
    {eno:8,ename:'A8', dname:'D4'},
    {eno:9,ename:'A9', dname:'D1'},
    {eno:10,ename:'A10', dname:'D3'}
];
// When there is JSON object read its keys to process it using Object.keys()
// OR Object[property] to extract value from the object

let properties = Object.keys(emps[0]);
console.log(JSON.stringify(properties));
let obj = emps[0];
console.log(obj['ename']);

// lets go for defining groups of employees based on 'specific property of employee object'
// e.g. dname
function  createGroup(records:[], property:string ):any{
   // groupObject: The object where group result will be stored
   // record: Each iterated record from the 'records'  array 
   let result = records.reduce((groupObject:any, record)=>{
        // get the value of the group property of the current record
        let keyValue = record[property];
        console.log(`Current Group Key Value is = ${keyValue}`);

        // match the record in groupObject base on the key value
        if(!groupObject[keyValue]){
            // the resultant object is empty
            groupObject[keyValue]= []; 
        }
        // else push the matched record into the groupObject
        groupObject[keyValue].push(record);
        console.log(`After the Match Found the group has value as = ${JSON.stringify(groupObject)}`);
        return groupObject; // closure that is returning the latest state on inner function
   }, {});
   return result;
}

let groups = createGroup(emps,'ename');
console.log(`Groups are ${JSON.stringify(groups)}`);











 