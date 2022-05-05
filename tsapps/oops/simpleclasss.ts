class SimpleClass {
  // lets define empty function declaration for defining function overloading
  // Rules
  // 1. First define a function, that will have 'any' parameters and 'any' return type
  add(x: any, y: any): any;
  // 2. declare specific to type functions as per the need
  add(x: number, y: number): number;
  add(x: string, y: string): string;
  // 3. Write the Logic implementation
  add(x: any, y: any): any {
    // number check
    if (typeof x === "number" && typeof y === "number") {
      console.log("NUMBERS");

      return x + y;
    }
    // string check
    if (typeof x === "string" && typeof y === "string") {
      console.log("String");
      return (x + y).toUpperCase();
    }
    // any data check
    if (
      typeof x === "string" ||
      typeof x === "number" ||
      typeof y === "string" ||
      typeof y === "number"
    ) {
        console.log('ANY');
        return x + y;
    }
  }

  // private declarations
  private _X: number = 0;
  private _Y: number = 0;

  // parameterized constructor
  constructor(x: number, y: number) {
    this._X = x;
    this._Y = y;
  }
  // public functions
  addition(): number {
    return this._X + this._Y;
  }

  power(): number {
    return Math.pow(this._X, this._Y);
  }

  // passing variable numbers of parameters
  summation(...values:Array<number>):number {
     let sum:number = 0;
     if(values.length > 0){
         values.forEach((n,i)=>{
             sum+=n;
         });
     }   
     return sum;
  }

  summationAny(...values:Array<number>|Array<string>):any {
    let sum:any;
    if(values.length > 0){
        values.forEach((n,i)=>{
            if(typeof n === 'number'){
                sum+= parseInt(n);
            }
            if(typeof n === 'string'){
                sum+=n.toLowerCase();
            }
        })
    }   
    return sum;
 }

}

// instantiate the class
let objS = new SimpleClass(10, 5);
console.log(`Add = ${objS.addition()}`);
console.log(`Power = ${objS.power()}`);

console.log(`Numbers Add ${objS.add(10,20)}`);
console.log(`Strings Add ${objS.add("Mahesh","Sabnis")}`);
console.log(`Any Add ${objS.add("10","Sabnis")}`);

console.log(`Add 2 = ${objS.summation(1,2)}`);
console.log(`Add 3 = ${objS.summation(1,2,3)}`);
console.log(`Add 4 = ${objS.summation(1,2,3,4)}`);
console.log(`Add 5 = ${objS.summation(1,2,3,4,5)}`);


console.log(`Add 2 = ${objS.summationAny(1,2)}`);
console.log(`Add 3 = ${objS.summationAny(1,2,3)}`);
console.log(`Add 4 = ${objS.summationAny(1,2,3,4)}`);
console.log(`Add 5 = ${objS.summationAny(1,2,3,4,5)}`);

console.log(`String Add 2 = ${objS.summationAny('A','B')}`);
console.log(`String Add 3 = ${objS.summationAny('A','B', 'C')}`);


