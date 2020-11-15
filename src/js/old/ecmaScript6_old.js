

/**
 * LECTURE 03
 */
/**
 * GLOBAL Variables
 */
//let a = 1;
//let b = 2;
//let c = true;


/**
 * Hoisting
 */
// Example 01

// Example 02
// only declarations are hoisted 
// Returns undefined

/**
 * LET AND CONST
 */
// Example 03
//const API_KEY = b;
//const ARR = [0, 0, 2, 3, 4];


/**
 * SCOPE, REDECLARATION, TDZ
 */
// Example 04
/* let x = 1;

function methodCall() {
  let x = 2;
  console.log('print2', x);
  console.log('print3', x);
  if (true) {
    let x = 3;
    let y = 3;
    console.log('print4', x, y);
  }

  console.log('print5', x, y);
}


console.log('print1', x);
methodCall();
 */
// Example 05
/* console.log(count);
console.log(count1);
var count = a;

let count1 = 40;
 */

/* if (c) {
console.log(typeof value);
let value = "blue";
} */

// Example 06


//Scope in for loops



/**
 * Destructuring
 */

// Example 07
//Dont forget initializer let {type}; causes syntax error
/* let type = 'Variable';
let myType2 = 'type2';
let name = 'Name';
let node = {
    type: 'Type One',
    name: 'Name One',
    another: {
      innerType:'type',
      innerName:'name'
    }
  }

let { type: myType,  another: {innerType: typeNew} } = node;
console.log(myType);

 console.log(node);
({
    type:myType2,
    name
  } = node);
console.log(myType2);
console.log(name); */
// Example 08

//let [one, two, three, , five] = nodeArr;



/**
 * Rest operator
 * Rest operator allows you to independent arguments can be combined into one array
 * REST parameters are indicated with ...
 */
//Example 09
/* const nodeArr = [1, 2, 3, 4, 5, [8, 9, 7]];
let [one, two, three, , five] = nodeArr;
let [first, ...rest] = nodeArr;
let [, , , , , [...inner]] = nodeArr;

let node = {
  innerArr: 'test',
  innerArr2: 'test2'
}


  */


/**
 * Spread operator
 * Allow to split array to single arguments and pass to a function
 */
// Example 10


/* function pick(param, ...keys) {
 console.log(keys);
}
let arra = [1,3,4,45,5,6,65];
let [,...threeNext] = arra;

pick(0, threeNext, 7, 8); */


/**
 * String interpolation
 * Using backticks ``
 */
// Example 11
/*const obvod = 2 * 3.14 * 10;


console.log(`${obvod.toString(10)} ${Math.random()} \n test \` \" `);

console.log(`Obvod kruhu obvod`);
console.log(`${Math.random()*40}`);
var MultiLineText = `
Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.
Nullam at arcu a est sollicitudin euismod.
Nam quis nulla. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est.
`;

console.log(MultiLineText);


/**
 * ==============================================================
 * LECTURE 02
 * ==============================================================
 */

/**
 * Additional default parameters
 */
// ES5 default parameters
//  function makeRequest(url, timeout, callback) {
//     timeout = timeout || 2000;
//     callback = callback || function(){};
//     //OR
//     timeout = (typeof timeout !== 'undefined') ? timeout : 2000;
//     callback = (typeof callback !== 'undefined') ? callback : function () {};
//     // the rest of the function
//  }

// ES6 default parameter 
// const URL_API = "https://yesno.wtf/api";


// function makeRequestES6(url, timeout = 2000, callback = function(){}) {
//   console.log(``)
//   console.log(`Called ${makeRequestES6.name}\nURL=${url}, TIMEOUT=${timeout}, CALLBACK=${callback}`);
  
//   callback.call();
//   callback();
// }
// function makeRequestES6(url) {
//   console.log('ONE param');
//   for(let arg of arguments) {
//     console.log(arg);
//   }
// }

 //makeRequestES6('url', 2345);
// makeRequestES6(URL_API);
// // HOW TO PASS default argument to second parameter

// makeRequestES6(URL_API,null, ()=> {console.log('callback')})
 //makeRequestES6(URL_API, undefined, ()=>console.log('undefined second argument'))



//  function getValue(value = 5) {
//     return value;
//  }

//  function getTime() {
//    return new Date();
//  }

// // // BE CAREFUL WITH PARENTHESES for function
// function addValue(first, second = getTime()) {
//  console.log(first + second);
//   console.log(second);
// }
// addValue('first');

// function addNext(first, second = getValue(first)) {
//   console.log(first + second);
// }

// function addNextOne(first = second,second) {
  
// }

// function addMore(first = second, second) {
//   console.log(first + second);
// }
// addMore(undefined, 5);

// //** SPREAD AND REST AGAIN */
// function restFunction(first,...other) {
//   console.log(first);
//   for(let param of other) {
//     console.log(`Other ${param}`);
//   }
// }
// // THIS IS SPREAD PARAMETER
// restFunction('First',...[1,2,3,4,5]);



// /**
//  * OBJECTS
//  * 1) Ordinary objects - Have all the default internal behaviors for objects
//  * 2) Exotic objects - Have internal behavior that differs from the default in some way
//  * 3) Standard objects - Array, Date... can be ordinary or exotic
//  * 4) Built-in objects - Present in a JS execution environment when script begins to execute.
//  *  All standard objects are built in objects
//  */
// // Property initializers
// function createObject(name, surname) {
//   return  {
//     name: name,
//     surname: surname,
//     sayName: function() {
//       console.log(this.name);
//     }
//   }
// }

// function createES6(name, surname) {
//   return {
//     name,
//     surname,
//     sayName() {
//       console. 
//       log(this.name);
//     }
//   }
// }

// var objCr = createES6('nameVal', 'surnameVal');
// for(let pro in objCr) {
//   console.log(pro);
//   console.log(objCr[pro]);

// }

// // Computed property names
// var person = {
//   "first name": ''
// }, 
// lastName="last name";

// person["first name"] = "Nicholas"; 
// person[lastName] = "Zakas"; 



// console.log(person["first name"]); // "Nicholas" 
// console.log(person[lastName]);


// // Directly in object
// var person1 = {
//   "first name": "Nicholas"
// };
// console.log(person1[lastName]);
// let lastName1 = "last name";

// let computedPropsObj = {
//   [lastName1] : "Zakas"
// }
// console.log(computedPropsObj);
// console.log(computedPropsObj[lastName1]);

// let suffix = " name";
// var person2 = {
//   ["first" + suffix]: "Nicholas",
//   ["last" + suffix]: "Zakas"
// }

// var person3 = {
//   firstName: '',
//   array: [],
//   bool: true
// }
// // NEW OBJECT METHODS
// // COMPARATION == with type ===
// console.log(-1 === +1); // true
// console.log(-1 == +1); // true

// let obj1 = {
//   name:1
// }
// let obj2 = {
//   name:1
// }

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);
// console.log(Object.is([]+{},obj2));
// console.log([]+{});
// let obj3 = []+{};
// console.log(obj3);
// console.log(Object.is(+0,-0)); //false 
// console.log('test')
// console.log(0.1+0.2);
// console.log(0.5+0.1==0.6);

// // console.log(NaN === NaN); // false using isNan()
// // console.log(NaN === NaN); // false using isNan()
// // console.log(Object.is(NaN,NaN)); // true

// // console.log(5 == 5); // true
// // console.log(5== "5"); // true
// // console.log(5 === 5); // true
// // console.log(5 === "5"); // false
// // console.log(Object.is(5,5)); // true
// // console.log(Object.is(5, "5")); // false

// // SYMBOLS
// // strings, numbers, Booleans, null, undefined, SYMBOLS
// // No literal form

// // let firstName = Symbol(); 

// // let person2 = {};

// // person2[firstName] = "Nicholas";
// // console.log(person2[firstName]); // "Nicholas"

// let firstName1 = Symbol("First name");
// let person3 = {};

// person3[firstName1] = "Nicholas";

// console.log("First name" in person3);
// console.log(person3[firstName1]);
// console.log(firstName1); // Description is stored internally in [[Description]]
// // Symbols are primitives can be used typeof
// let firstName2 = Symbol("First name");
// let person4 = {
//   [firstName2] : "Nicholas"
// }

// let firstName3 = Symbol("First name");

// Symbol.for("First name");


// // // make the property read only
//  Object.defineProperty(person4, firstName2, {writable: false});

// let lastName2 = Symbol("Last name");
// Object.defineProperties(person4, {
//   [lastName2] : {
//     value: "Zakas",
//     writable: false
//   }
// });

// // console.log(person4[firstName2]); // "Nicholas"
// // console.log(person4[lastName2]); // "Zakas"

// //  Symbol.for() searching global registry 
//  let uid = Symbol.for("uid"); // If exists is returned if not it is created

// // let object1 = {
// //   [uid]: "12345"
// // };

// // let symbols = Object.getOwnPropertySymbols(object);
// // console.log(symbols.length);
// // console.log(symbols[0]);
// // console.log(object[symbols[0]]);

// // WELL KNOWN SYMBOLS

// /**
//  * Sets, WeakSets
//  * Sets are unordered list with unique values
//  */
// // Example 12
//   let set = new Set();
//   set.add(5);
//   set.add("5");
//   set.add(5);
//   set.add(4);
//   console.log(set.size); //2
//   set.add(['key',6]);
//     console.log(set);
//  console.log('keys',set.keys());
//  console.log('val',set.values());

//  set.forEach((value,index, set) => {
//   console.log(value);
//   console.log(index);
//   console.log(set);
//  });
// // Example 13
// // let weakSet = new WeakSet();
//  let weakobject = Object.assign({}, {
//  name: "awesome"
//  });
// // weak set can contains only objects
// weakSet.add(weakobject);
// weakobject = null;
// console.log("Weak set", weakSet);

// /**

// // Example 14
// // Map is a key value collection ordered
// let map = new Map([
// [weakobject, "name"],
// ["key", "value"],
// ["aey", "value"]
// ]);




// Example 15
// let obj = {keys:'Key'};
// let weakmap = new WeakMap([
//   [obj, "Val;ue"]
//   ]);

//   weakmap.set({"name":name}, 'value');
//   console.log("Weakmap", weakmap);



import 'babel-polyfill';
/**
 * ==============================================================
 * LECTURE 03
 * ==============================================================
 */

/**
 * Arrow functions, Iterators, Generators
 */
// Example 15_x


// Example 16
// Generator is a functions that returns iterator
// Iterator is an object designed with specific interface for iteratig collections


// FOR OF SYNTAX
//let fibonnaci = [0,1,1,2,3,5,8,13,21];
//for (let n of fibonacci) {
//  if (n > 1000)
//      break;
//  console.log(n);
//}




// Example 17
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
    // BONUS
    // Example 18

    // Example 19
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
     console.log(iteratorError.throw(new Error(
    )));
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
     console.log(iteratorCatch.throw(new Error(
    )));
     console.log(iteratorCatch.next());
    // Example 20
    // Generator return statement
   
    // Example 21
   
    
    
    /**
     * Classes and modules
     */
    // Example 18
    // Default construct, with constructor params
    //  class Foo {
    //      constructor() {
    //          // Error
    //        //  Foo = "bar";
    //      }
    //  }
    
    
    // Class names, changing
    //  // Class name can be overwritten here
    //  Foo = "Bazmek";
    // console.log(Foo);
    
    // // Difference is that expression body can have name property empty 
    // // Class declarations always have a name property
    
    // let PersonClassExpressionBody = class {
    //     // equivalent of the PersonType constructor
    //     constructor(name) {
    //         this.name = name;   
    //     }
    
    //     // equivalent of PersonType.prototype.sayName
    //     sayName() {
    //         console.log(this.name);
    //     }
    // };
    
    // First class citizens 
    // // function that returns new instance of passed class
    // function createObject(classDef) {
    //     return new classDef();
    // }
    
    // // new instance of an object is stored into obj variable
    // let obj = createObject(class {
    //     sayHi() {
    //         console.log("Hi!");
    //     }
    // });
    
    // obj.sayHi(); // "Hi!"
    
    // Singletons with IIEF
    // let personSingleton = new class {
    //     constructor(name) {
    //         this.name = name;
    //     }
    
    //     sayName() {
    //         console.log(this.name);
    //     }
    // }("Nicholas");
    
    // Accessor properties
    // class CustomHTMLElement {
    //     constructor(element) {
    //         this.element = element;
    //     }
    
    //     get html() {
    //         return this.element.innerHTML;
    //     }
    
    //     set html(value) {
    //         this.element.innerHTML = value;
    //     }
    // }
    
    // Computed Member Names
    // let computedName = "sayComputed";
    // class MemberNames {
    //     constructor(computed) {
    //         this.computed = computed;
    //     }
    //     [computedName]() {
    //         console.log(this.computed);
    //     }
    
    // }
    
    