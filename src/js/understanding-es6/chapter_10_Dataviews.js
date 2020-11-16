//import 'babel-polyfill';

// CHAPTER 10

// Imporved Array Capabilities
// Creating arrays 2 ways constructor and array literal syntax.

// Array.of(); and Array.from();

let items = new Array(2);
console.log(items.length); // 2
console.log(items[0]); // undefined
console.log(items[1]); // undefined

console.log("Array with string");
items = new Array("2");
console.log(items.length); // 1
console.log(items[0]); // "2"

console.log("Array with numbers");
items = new Array(1,2);
console.log(items.length);
console.log(items[0]);
console.log(items[1]);

console.log("Array with number and string");
items = new Array(3, "2");
console.log(items.length); // 2
console.log(items[0]); // 3
console.log(items[1]); // "2"

// Array of solve problem with type safety
// Array of() creates an array containing its argumets regardless of the number of arguments
// or the argument types

let items = Array.of(1,2);
console.log(items.length); // 2
console.log(items[0]); // 1
console.log(items[1]); // 2

items = Array.of(2);
console.log(items.length); // 1
console.log(items[0]); // 2

items = Array.of("2");
console.log(items.length); // 1
console.log(items[0]); // "2"


function createArray(arrayCreator, value) {
    return arrayCreator(value);
}

let items = createArray(Array.of, ["Awesome",2]);
console.log(items);


// The Array.from() method
// Converting nonarray objects  into actual arrays
// ECMASCRIPT 5
function makeArray(arrayLike) {
    let result = [];
    for(let i = 0, len = arrayLike.length;i<len; i++) {
        result.push(arrayLike[i]);       
    }

    return result;
}

function doSomething() {
    var args = makeArray([1, 2, 3, "Awesome"]);

    console.log(args);

}

// ECMAScript 6
function doSomething(){
    let args = Array.from([4,7]);

    // to take step further use second argument as a mapping function
   

    console.log(args);
}
doSomething();

function translate() {
    return Array.from(arguments, (value) => value/1.5456);


}
let numbers = translate(1,2,3);

console.log(numbers);
//third argument is this

let helper = {
    diff:1,
    add(value) {
        return value + this.diff;
    }
}

function translateWithHelper() {
    return Array.from(arguments, helper.add, helper);
}

let numbersFromHelper = translateWithHelper(1,2,5);
console.log(numbersFromHelper);


// IF AN Object is array-like and an iterable, the iterator is used by Array.from()
// to determine the values to convert


// NEW Methods on All Arrays
// Arrays find() and findIndex()
let numbers2 = [25,30,35,40,45];
// both functions takes callback function and optional this to use inside
// after first match it returns value of the match
console.log(`Find 33 = ${numbers2.find(n => n > 33)}`);
console.log(`FindIndex 33 = ${numbers2.findIndex(n => n > 33)}`);
// If you only want to find a value indexOf() and lastIndexOf() are better choices

// The fill() method
// overwrites all the values i n an array with that value
let numbers3 = [1,2,3,4];
numbers3.fill(1);
console.log(numbers3.toString()); // 1 1 1 1
// To change only part of array include startIndex parameter 
//and exclusive endIndex
// if negative index provided it is added to length of array to determine value
numbers3.fill(2,1);
console.log(numbers3.toString());

numbers3.fill(3,1,3);
console.log(numbers3.toString());

/* The copyWithin() method it changes multiple array elements at the same time
   2 arguments
   index where to start and the index where to copy values start
*/
let numbers4 = [1,2,3,4];
// paste values into array starting at index 2
// copy values from array startin at index 0
numbers4.copyWithin(2,0,1); // copies until no more elements left to copy into
console.log(numbers4.toString());


// TYPED ARRAYS
// <canvas> element is the original purpose of typed arrays for bitwise opperations
// Numbers in javascript are stored in IEEE 754 foramt which uses 64bits to store a floating-point repres. of a number
/*
    Signed 8-bit integer (int8)
    Unsigned 8-bit integer (uint8)
    Signed 16-bit integer (int16)
    Unsigned 16-bit integer (uint16)
    Signed 32-bit integer (int32)
    Unsigned 32-bit integer (uint32)
    32-bit float (float32)
    64-bit float (float64)
*/

// ArrayBuffers
let byteLength = 20;
let arraybuffer = new ArrayBuffer(byteLength);
console.log(`Buffer length ${arraybuffer.byteLength}`);

let arraySlice = arraybuffer.slice(4,8);
console.log(arraySlice.byteLength);

// To manipulate Array Buffers with view
//Array buffer is memory location and views are the interfaces you'll use to manipulate that memory.
let dataView = new DataView(arraybuffer,0,10);
// Retrieving View Information
// buffer = The array buffer that the view is tied to
// byteOffset = The second argument to the DataView constructor, if provided (0 by default)
// byteLength = The third argument to the DataView constructor, if provided (the buffer's byteLength)
let allView = new DataView(arraybuffer);

console.log(`Data view with args ${dataView.byteLength}`);
console.log(`Data view covers all ${allView.byteLength}`);

// Reading and Writing Data
// For each numeric types is method to read and write data
dataView.setInt8(2,8);
dataView.setInt8(3,33);
console.log(dataView.getInt8(2));
console.log(dataView.getInt8(3));

