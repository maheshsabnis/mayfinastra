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
class Employee{
    private _EmpNo:number;
    private _EmpName: string;
    private _DeptName:string;

    constructor(eno:number, ename:string, dname:string){
        this._EmpNo  = eno;
        this._EmpName = ename;
        this._DeptName = dname;
    }
}
// define an array of class because Array is generic

let employees:Array<Employee> = new Array<Employee>();
employees.push(new Employee(101, 'Tejas', 'IT'));
employees.push(new Employee(102, 'Mahesh', 'HR'));
employees.push(new Employee(103, 'Ramesh', 'IT'));
employees.push(new Employee(104, 'Ram', 'HR'));

 