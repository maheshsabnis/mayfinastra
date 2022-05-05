// the 'Object' as a datatype
var obj1 = { x: 10 };
console.log("obj1.x is = ".concat(obj1.x));
// lets assign the obj1 to obj2
var obj2 = obj1; // the obj1 and obj2 holds the same reference of the object
// update obj2
obj2.x = 100;
console.log("After obj2 update obj2.x = ".concat(obj2.x, " and obj1.x is = ").concat(obj1.x));
// use the Creational Pattern on ES to create a new object based on the schema
// obj3 is clone of obj1 but obj3 can have different values and schema than obj1  
var obj3 = Object.assign({ y: 199 }, obj1);
console.log("After assign obj1 to obj3 obj3.x = ".concat(obj3.x, " and obj1.x is = ").concat(obj1.x));
obj3.x = 1000;
console.log("After obj3 update obj3.x = ".concat(obj3.x, " and ").concat(obj3.y, " and obj1.x is = ").concat(obj1.x));
obj1 = null; // killing obj1 
// console.log(`After killing obj1 update obj2.x = ${obj2.x} and obj1.x is = ${obj1.x}`);
// rebirth
obj1 = { x: 400 }; // complete new object
console.log("After Rebirth obj1 update obj2.x = ".concat(obj2.x, " and obj1.x is = ").concat(obj1.x));
