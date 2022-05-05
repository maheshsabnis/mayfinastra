var SimpleClass = /** @class */ (function () {
    // parameterized constructor
    function SimpleClass(x, y) {
        // private declarations
        this._X = 0;
        this._Y = 0;
        this._X = x;
        this._Y = y;
    }
    // 3. Write the Logic implementation
    SimpleClass.prototype.add = function (x, y) {
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
        if (typeof x === "string" ||
            typeof x === "number" ||
            typeof y === "string" ||
            typeof y === "number") {
            console.log('ANY');
            return x + y;
        }
    };
    // public functions
    SimpleClass.prototype.addition = function () {
        return this._X + this._Y;
    };
    SimpleClass.prototype.power = function () {
        return Math.pow(this._X, this._Y);
    };
    // passing variable numbers of parameters
    SimpleClass.prototype.summation = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var sum = 0;
        if (values.length > 0) {
            values.forEach(function (n, i) {
                sum += n;
            });
        }
        return sum;
    };
    SimpleClass.prototype.summationAny = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var sum;
        if (values.length > 0) {
            values.forEach(function (n, i) {
                if (typeof n === 'number') {
                    sum += n;
                }
                if (typeof n === 'string') {
                    sum += n.toLowerCase();
                }
            });
        }
        return sum;
    };
    return SimpleClass;
}());
// instantiate the class
var objS = new SimpleClass(10, 5);
console.log("Add = ".concat(objS.addition()));
console.log("Power = ".concat(objS.power()));
console.log("Numbers Add ".concat(objS.add(10, 20)));
console.log("Strings Add ".concat(objS.add("Mahesh", "Sabnis")));
console.log("Any Add ".concat(objS.add("10", "Sabnis")));
console.log("Add 2 = ".concat(objS.summation(1, 2)));
console.log("Add 3 = ".concat(objS.summation(1, 2, 3)));
console.log("Add 4 = ".concat(objS.summation(1, 2, 3, 4)));
console.log("Add 5 = ".concat(objS.summation(1, 2, 3, 4, 5)));
console.log("Add 2 = ".concat(objS.summationAny(1, 2)));
console.log("Add 3 = ".concat(objS.summationAny(1, 2, 3)));
console.log("Add 4 = ".concat(objS.summationAny(1, 2, 3, 4)));
console.log("Add 5 = ".concat(objS.summationAny(1, 2, 3, 4, 5)));
console.log("String Add 2 = ".concat(objS.summationAny('A', 'B')));
console.log("String Add 3 = ".concat(objS.summationAny('A', 'B', 'C')));
