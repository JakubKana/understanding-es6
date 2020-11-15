import 'babel-polyfill';

/**
 * ==============================================================
 * LECTURE 04
 * ==============================================================
 */

/**
 * Modules and imports and exports
 * 
 */
// Example 22
//include / ./ ../ at the begining due to compatibility with browsers
import Logger from "./modules/module1";
//import * as name from "./modules/module1";
//import { div, division } from "./modules/module1";

//import { Division } from "./modules/module1";
var logger = new Logger("DefaultLogger");
//logger.debug("Default");
// import { export1 , export2 } from "./modules/module1";
// import { export1 , export2 as alias2 , [...] } from "./modules/module1";
// import defaultExport, { division, sum} from "./modules/module1";
// import jaExport, * as name from "./modules/module1";

// var nameLogger = new defaultExport("NameLogger");
// nameLogger.debug("NameLogger");
//import "./modules/module1";


// Example 23
//let logger = new defaultImport('MyLogger');
//include / ./ ../ at the begining due to compatibility with browsers
// import sum from "./modules/module1";
// export {sum};
// export {sum as add};
// export * from "./modules/module1";


/**
 * Promises
 * 
 * Promise lifecycle UNSETTLED (pending) - SETTLED (fulfilled, rejected)
 */
// Example 24 THENABLE
// let thenable = {
//     then(reject, resolve) {
//         resolve(42);
//     }
// }
// thenable.then(null, (result) => {
//     logger.debug(result)
// });

// Example 25 
// function getPromise(thisPromiseCount) {
//     return new Promise((resolve, reject) => {
//         window.setTimeout(() => {
//             logger.info('resolving');
//             var randBool = Math.random() >= 0.5;
//             if (randBool) {
//                 resolve(thisPromiseCount)
//             }
//             reject('RandBool is false');
//         }, Math.random() * 2000 + 1000);
//     });
// }
// let myPromise = getPromise(55);
// myPromise.then(
//         (value) => {
//             setTimeout(
//                 () => {
//                     logger.info('timeout')
//                 }, 2000);
//             logger.info(value);
//         })
//     .catch(reason => logger.error(reason));

// class MyPromise extends Promise {
//     success(resolve, reject) {
//         return this.then(resolve, reject);
//     }
//     failure(reject) {
//         return this.catch(reject);
//     }
// }
// let promise = new MyPromise(function (resolve, reject) {
//     resolve(42);
// });
// promise.success(function (value) {
//     console.log(value);
// }).failure(function (value) {
//     console.log(value);
// });


// Example 26 Extended promise use browser 



// Example 27 Chaining promises
// let p1 = new Promise(function (resolve, reject) {
//     resolve(42)
// });
// p1.then(function (value) {
//         console.log(value);
//     }).then(function (function () {
//             console.log("Finished");
//         });
//         // same as
//         let p2 = p1.then(function (value) {
//             console.log(value);
//         })
//         p2.then(function () {
//             console.log("Finished");
//         });


// Example 28 RACE, ALL
// let p1 = new Promise(function (resolve, reject) {
//     resolve(42);
// });
// let p2 = new Promise(function (resolve, reject) {
//     reject(43);
// });
// let pRace = Promise.race([p1, p2]);
// pRace.catch((value) => {
//     console.log(Array.isArray(value));
//     console.log(value);
// });
// let pAll = Promise.all([p1, p2]);
// pAll.then(function (value) {
//     console.log(Array.isArray(value));
//     console.log(value[0]);
//     console.log(value[1]);
//     console.log(value[2]);
// });


/**
 * Proxies and Reflection API
 */
// Example 29 - Simple proxy, ArrayProblem
// let target = {};
// let proxy = new Proxy(target, {});
// proxy.name = "proxy";
// console.log(proxy.name);
// console.log(target.name);
// target.name = "target";
// console.log(proxy.name);
// console.log(target.name);

// // Proxy trap overrides behaivor of Reflect
// let target1 =  {
//     name: "target"
// };
// let proxy1 = new Proxy(target1, {
//     set(target1, key, value, proxy1) {
//         // ignore existing properties so as not to affect them
//         if(!target1.hasOwnProperty(key)) {
//             if(isNaN(value)) {
//                 throw new TypeError("Property must be a number");
//             }
//         }

//         // add the property
//         return Reflect.set(target1, key, value, proxy1);
//     },
//     get(target1, key, receiver) {
//         if(!(key in receiver)) {
//             throw new TypeError(`Property key doesn't exist. ${key}`);
//         }
//         return Reflect.get(target1, key, receiver);

    
//     }
// });

// proxy1.count = 1;
// console.log(proxy1.count); // 1
// console.log(target1.count); // 1

// // you can assign to name because it exists on target already
// proxy1.name = "proxy";
// console.log(proxy1.name);
// console.log(target1.name);
// proxy1.surname = "proxy";
// // get
// proxy1.name = "proxy";
// console.log(proxy1.name);
// console.log(proxy1.middleName);


/**
 * WebWorkers
 */

// Check if browser supports workers  => if(window.Worker)

//var myWorker = new Worker('./build/worker.js');
var result = document.querySelector('.test');
// Sending messages vie postMessage();

// In the worker 
//onmessage = function(e) {
//    console.log('Message received from main script');
//    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
//    console.log('Posting message back to main script');
//    postMessage(workerResult);
//  }

// In the main.js
//  myWorker.onmessage = function(e) {
//     result.textContent = e.data;
//     console.log('Message received from worker');
//   }

// myWorker.onerror = function(e) {
//     console.log('Error received from worker');
// }

//    myWorker.postMessage([5,3]);
//  myWorker.postMessage('error');

// Terminating workers 
// in main.js myWorker.terminate();

// Worker can terminate itself with close();

// Handling errors
// onerror event hanndler is called

// SHARED WORKERS
 var sharedWorker = new SharedWorker('./build/sharedWorker.js');
 var sharedWorker2 = new SharedWorker('./build/sharedWorker.js');

sharedWorker.port.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from sharedworker1', e.data);
}

sharedWorker2.port.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from sharedworker', e.data);
}

  sharedWorker2.port.postMessage([8,8]);

   sharedWorker.port.postMessage([4,8]);
//    import all from './modules/module2';



/**
 * Sources
 */

//1) Understanding ECMAScript 6
//2) http://es6-features.org/
//3) https://github.com/seznam/IT-akademie/tree/master/reactjs/es6
//4) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources 
//5) https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API

//6) Understanding ECMAScript 6 - NoStarch Press