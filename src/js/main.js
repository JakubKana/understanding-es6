/**
 * Chapter 12 Proxies
 * Proxies targets e.g. Array Problem
 * Proxy passes all methods and properties out as an interface to low level build-in objects
 * It virtualizes the target so the proxy and the target appear to be functionally the same
 */

let target = {};
let proxy = new Proxy(target, {});

proxy.name = 'proxy';
console.log(`Proxy ${proxy.name}`);
console.log(`Target ${target.name}`);

target.name = 'target';
console.log(`Proxy ${proxy.name}`);
console.log(`Target ${target.name}`);

// Proxy Traps in JavaScript
/* 
 * get reading a property value - Reflect.get()
 * set writing a property value - Reflect.set()
 * has the in operator - Reflect.has()
 * deleteProperty the delete operator - Reflect.deleteProperty()
 * getPrototypeOf - Object.getPrototypeOf() - Reflect.getPrototypeOf()
 * setPrototypeOf - Object.setPrototypeOf() - Reflect.setPrototypeOf()
 * isExtensible - Object.isExtensible() - Reflect.isExtensible()
 * preventsExtensions - Object.preventExtensions() - Reflect.preventExtensions()
 * getOwnPropertyDescriptor - Object.getOwnPropertyDescriptor() - Reflect.getOwnPropertyDescriptor()
 * defineProperty - Object.defineProperty() - Reflect.defineProperty
 * ownKeys - Object.keys(), getOwnPropertyNames(), getOwnPropertySymbols() - Reflect.ownKeys()
 * apply - Calling a function - Reflect.apply()
 * construct - Calling a function with new - Reflect.construct() 
 */

 // Validation Properties Using the set Trap
 // To accomplish this task you could define a set trap that overrides default behavior of setting a value
 /* set recieves four arguments
 * trapTarget
 * key
 * value
 * receiver
 */

 let target = {
     name: 'target'
 };

 let proxy = new Proxy(target, {
    set(trapTarget, key, value, receiver) {
    // ignore existing properties so as not to affect them
    if(!trapTarget.hasOwnProperty(key)) {
        if(isNaN(value)) {
            throw new TypeError("Property must be a number");
        }
    }

    return Reflect.set(trapTarget,key,value,receiver);
 }});

 // adding a new property
 proxy.count = 1;
 console.log(proxy.count); //1
 console.log(target.count); //1

 // you can assign to name because it exists on target already
 proxy.name = 'proxy';
 console.log(proxy.name); // "proxy"
 console.log(target.name); // "proxy"

 // throws an error
 //proxy.anotherName = 'proxy';
proxy.anotherNum = 5;

console.log(proxy.anotherNum);
console.log(target.anotherNum);


// Object Shape Validation Using the get Trap
// Object shape is the collection of properties and methods available on the object.
// Javascript uses 
let target2 = {};

console.log(target2.name);

class MyPromise extends Promise {

    success(resolve, reject) { return this.then( resolve, reject); } 

    failure( reject) { return this.catch( reject); }    
}

let p1 = new MyPromise(function(resolve, reject) { 
    resolve(42); 
}); 
p1.success(function(value) {
    console.log(value);
}).failure(function(value) { 
    console.log(value); 
});
