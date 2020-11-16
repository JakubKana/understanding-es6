import 'babel-polyfill';


// Chapter 11 Asynchronous programming and Promises

let rejected;

window.onunhandledrejection = function(event) {
    console.log(event.type);                 // "unhandledrejection"
    console.log(event.reason.message);       // "Explosion!"
    console.log(rejected === event.promise); // true
}

window.onrejectionhandled = function(event) {
    console.log(event.type);                 // "rejectionhandled"
    console.log(event.reason.message);       // "Explosion!"
    console.log(rejected === event.promise); // true
}

rejected = Promise.reject(new Error("Explosion!"));

// Chaining Promises




let p1 = new Promise(function(resolve, reject) {
    let random = Math.round(Math.random());
    if(random == 1) {
        resolve(42);
    } else {
        reject(44);
    }
   
});

p1.then(function(value) {
    console.log("Value");
}).then(function() {
    console.log("Finished");
});

let p2 = p1.then(function(value) {
    console.log('Value');
});

p2.then(function() {
    console.log("Finished");
});

let ext = new ExtendedPromise(function(resolve, reject) {
    let random = Math.round(Math.random());

    if(random == 1) {
        resolve(`Resolved ${Math.Random()*10}`);
    } else {
        reject("Rejected");
        }
});

ext.success(function(value) {
    console.log(value);
}).error(function(value) {
    console.log(value);
});


/**
 * Extended promise
 */
class MyPromise extends Promise {

    success(resolve, reject) { return this.then( resolve, reject); } 

    fail( reject) { return this.catch( reject); }    
}

let promise = new MyPromise(function(resolve, reject) { 
    resolve(42); 
}); 
promise.success(function(value) {
    console.log(value);
}).fail(function(value) { 
    console.log(value); 
});


