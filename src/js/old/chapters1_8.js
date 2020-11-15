import submodule from './module';
import 'babel-polyfill';
import * as fs from 'fs';
let start = 0;
const PI = 3.14;
let sub = submodule;
const R = 3;
const obvod = 2 * PI * R;
console.log(`Obvod kruhu ${obvod}`);

let container = document.getElementsByClassName("container");
console.log(container);

let node = {
    type: 'Type One',
    name: 'Name One'
}

const nodeArr = [1, 2, 3, 4, 5, [8, 9, 7]];

let type = 'Variable One'
let name = 'Variable Name';

//let {type,name} = node;
({
    type,
    name
} = node);
let {
    type: myType
} = node;
let [one, two, three, , five] = nodeArr;
let [first, ...rest] = nodeArr;
let [, , , , , [...inner]] = nodeArr;
console.log(myType);
console.log(type);
console.log(name);
console.log(rest);
console.log(inner);

// Symbols
//When you use symbol you must always use symbol to access property
let firstName = Symbol("first name"); //stored internally in [[Description]]
// accessed when toString is called on Symbol object
let person = {}
person[firstName] = 'Nicholas';


//Use a computed object literal property
person = {
    [firstName]: 'Awesome'
};
console.log(person[firstName]);
console.log(typeof firstName);


// make the property read only
Object.defineProperty(person, firstName, {
    writable: false
});

let lastName = Symbol("last name");
Object.defineProperties(person, {
    [lastName]: {
        value: 'Zakas',
        writable: false
    }
});

console.log(person[firstName]);
console.log(person[lastName]);




// Symobols
let hasLengthOf10 = {
    [Symbol.match]: function (value) {
        return value.length === 10 ? [value.substring(0, 10)] : null;
    },
    [Symbol.replace]: function (value, replacement) {
        return value.length === 10 ? replacement + value.substring(10) : value;
    },
    [Symbol.search]: function (value) {
        return value.length === 10 ? 0 : -1;
    },
    [Symbol.split]: function (value) {
        return value.length === 10 ? ["", ""] : [value];
    }
};

let message1 = "Hello world",
    message2 = "Hello John";

let match1 = message1.match(hasLengthOf10),
    match2 = message2.match(hasLengthOf10);


console.log(match1);
console.log(match2);

let replace1 = message1.replace(hasLengthOf10),
    replace2 = message2.replace(hasLengthOf10);

console.log(replace1);
console.log(replace2);

let search1 = message1.search(hasLengthOf10),
    search2 = message2.search(hasLengthOf10);

console.log(search1);
console.log(search2);

let split1 = message1.split(hasLengthOf10),
    split2 = message2.split(hasLengthOf10);

console.log(split1); // -1
console.log(split2); // 0

//SETS in ECMASCRIPT 6
console.log("SETS");
let set = new Set();
set.add(5);
set.add("5");

console.log(set.size); // 2

let weakSet = new WeakSet();
let weakobject = Object.assign({}, {
    name: "awesome"
});
// weak set can contains only
//let weakobject = 12345; 
weakSet.add(weakobject);
weakobject = undefined;
console.log("Weak set", weakSet);
// MAPS
let map = new Map([
    [weakobject, "awesome"],
    ["key", "James"]
]);
map.forEach((key, value, map) => {
    console.log(key);
    console.log(value);
    console.log(map);
});

let weakmap = new WeakMap([
    [{
        keys: "Key"
    }, "Val;ue"]
]);
console.log("Weakmap", weakmap);
// Iterators and generators

function createIterator(items) {
    var i = 0;

    return {
        next: function () {
            var done = (i >= items.length);
            var value = !done ? items[i++] : undefined;
            return {
                done: done,
                value: value
            };
        }
    };
}

var iterator = createIterator([1, 2, 3, 5, 6, 3, 4]);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


// Generators
// You can use yield keyword only inside generators. 
// Using yeield anywhere else is a syntax error
// Including in functions that are inside generators, such as:

// function *createIteratorYield() {

//    yield 1;
//    yield 2;
//    yield 3;
//     //  items.forEach(function() {
//     //      // syntax error
//     //      yield item + 1;
//     //  });
// }

// Iterables and for-of Loops
// Is an object with a Symbol.iterator property
// Iterables in ES6 are designed to be used with new
// for-of loop

//All iterators created by generators are also iterables
// because generator 


// For-of constructions
// Throws an error when used with null or undefined
console.log("Running for-of construct");
let values = [1, 2, 3, 4, 5, 6, 7];
for (let num of values) {
    console.log(num);
}
// Acessing default iterator
//let iteratorDefault = values[Symbol.iterator]();
//console.log(iteratorDefault.next());


// // Creating iterables
// let customCollection = {
//     items: [],
//     *[Symbol.iterator]() {
//         for (let item of this.items) {
//             yield item;
//         }
//     }
// };


// customCollection.items.push(1);
// customCollection.items.push(2);
// customCollection.items.push(3);

// for (let x of customCollection) {
//     console.log(x);
// }

/*
 * !!! Build-in iterators entries(), keys(), values()
 * 
 */
let colors = ["red", "green", "blue"];
let tracking = new Set([1234,5678,9012]);
let data = new Map();

data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");



for (let entry of colors.entries()) {
    console.log(entry);
}

for(let entry of tracking.entries()) {
    console.log(entry);
}

for(let entry of data.entries()) {
    console.log(entry);
}

//Destructuring exercise
let destrucutred = [[3],[[1],[2]],7];

let [[thee],[,too],seven] = destrucutred;
let treee = destrucutred[0];
console.log(`${thee},${too},${seven}`);

// Default Iterators for Collection Types
// Default iterator values()
for (let entry of colors) {
    console.log(entry);
}
// Default iterator values()
for(let entry of tracking) {
    console.log(entry);
}
// Default iterator entries()
for(let entry of data) {
    console.log(entry);
}

let dataDestr = new Map();
dataDestr.set("title", "Understanding ECMAScript 6");
dataDestr.set("format", "ebook");

// same as using data entries()
for(let [key, value] of data) {
    console.log(key + "=" + value);
}

// String iterators
const message = "A 𠮷 B";
for(let c of message) {
    console.log(c);
}

//NodeList Iterators
let divs = document.getElementsByTagName("div");

for(let div of divs) {
    console.log(div);
}

// Spread Operator ... and Nonarray Iterables

function restOperator(first,...args) {
    console.log(first);

    for(let arg of args) {
        console.log(arg);
    }
}

restOperator("Someting","something","dark",null);


let setVals = new Set([1,2,3,4,5,6,7,8,9]),
array = [...setVals];

console.log(array);

// Spread operator converts map to array 
let smallNumbers = [1,2,3],
bigNumbers = [100,101,102],
allNumbers = [0, ...smallNumbers,...bigNumbers];

console.log("Spread operator full array from arrays")
console.log(allNumbers.length); // 7
console.log(allNumbers); // [0, 1, 2, 3, 100, 101, 102]


// THIS IS GENERATOR a function that returns Iterator
function * iteratorWithParams() {
   let first = yield 1;
   let second = yield first + 2; 
    yield second + 3;
}

let iteratorFromGenerator = iteratorWithParams();

console.log(iteratorFromGenerator.next());
console.log(iteratorFromGenerator.next(4));
console.log(iteratorFromGenerator.next(5));
console.log(iteratorFromGenerator.next());

// Throwing Errors in Iterators
// Iterators can implement throw() method
function *iteratorErrorGen() {
    let first = yield 1;
    let second = yield first +2;
    yield second + 3;
}

let iteratorError = iteratorErrorGen();
console.log(iteratorError.next());
console.log(iteratorError.next(4));

try {
console.log(iteratorError.throw(new Error("Boom")));
}
catch(err) {
    console.log(err.message);
}



function *iteratorWithCatch() {
    let first = yield 1;
    let second;
    try {
        second = yield first + 2;

    } catch (ex) {
        second = 6;
    }
    yield second + 3;
}

let iteratorCatch = iteratorWithCatch();

console.log(iteratorCatch.next());
console.log(iteratorCatch.next(4));
console.log(iteratorCatch.throw(new Error("Dynamite")));
console.log(iteratorCatch.next());

// Generator return statement
// Return indicates that no more values are to come
function *createReturnIterator() {
    yield 1;
    //return;
    // there is also possible indicate return value return 42;
    return 42; // "{value: 42, done:true}"
    yield 2;
    yield 3;
}

let generatorReturn = createReturnIterator();

console.log(generatorReturn.next());
console.log(generatorReturn.next());
console.log(generatorReturn.next());

// For-of and spread ignore value of return they match done true and stop iterating

//Delegating generators
function *generatorFirst() {
    yield 1;
    yield 4;
    yield 6;
}
function *generatorSecond() {
    yield 10;
    yield 40;
    yield 60;
}
console.log("Combined generators");
function *combineGenerators() {
    yield *generatorFirst();
    yield *generatorSecond();
    yield true;
}
let combinedGen = combineGenerators();

for(let entry of combinedGen) {
    console.log(entry);
}

// Asynchronous task running
// Traditional way is to call a function that has a callback

function run(taskDef) {
    // create the iterator, make available elswhere
    let task = taskDef();

    // start the task
    let result = task.next();

    // recursive function to keep calling next()
    function step() {
        // if there's more to do
        if(!result.done) {
            result = task.next();
            step();
        }
    }

    step();
}


run(function*() {
console.log(1);
yield;
console.log(2);
yield;
console.log(3);
});

run (function*() {
    let value = yield 1;
    console.log(value);
    value = yield value +3;
    console.log(value);
});


function fetchData() {
    return function(callback) {
        callback(null, "Hi!");
    };
}

function fetchData() {
    return function(callback) {
        setTimeout(function() {
            callback(null, "Hi!");z
        }, 50);
    }
}