import { realpathSync } from "fs";

// MODULE AUTOMATICALLY RUN IN STRICT MODE WITHOUT WAY TO OPT OUT
//EXPORTING DATA
export let LABEL = 'LABEL';
export var DATA = [1,2,3,4,5,6,7,8,9,4,5,6,33];
export const STATES = {
    STATE1: false,
    STATE2: { 
        name:'Jakub', 
        surname:'Kana' 
    },
    STATE3:'STATE3'
}

//console.log("Module1");
// DEFAULT EXPORT CAN BE ONLY ONE IN MODULE
// EXPORTING CLASSES
export default class Logger {

    constructor(name)
    {
        this.name = name;
    }

    debug(message, ...args) { // REST OPERATOR MADRFAKR
        console.log(`DEBUG - ${this.name} - ${message}`, ...args); //SPERAD OPERATOR DAUGHTERFUCKER
    }
    
    info(message, ...args) {
        console.log(`INFO - ${this.name} - ${message}`, ...args);
    }

    warn(message, ...args) {
        console.log(`WARN - ${this.name} - ${message}`, ...args);
    }

    error(message, ...args) {
        console.log(`ERROR - ${this.name} - ${message}`, ...args);
    }

}

export class Division {
    divide(num, num1) {
        return 42;
    }
}

// EXPORTING FUNCTIONS
function sum(num1, num2) {
    return num1+ num2;
} 


function division(num1, num2) {
    return num1/num2;
}

export function multiply(num1, num2) {
    return num1 * num2;
}

export function giveRandom() {
    return Math.round(Math.random()*10);
} 

// THIS IS PRIVATE FOR THE MODULE
function privateSum(num1, num2) {
    return num1 + num2;
}

//export {sum as add};
export {sum, division};
export {division as div};


//DEFAULT HAS SPECIAL MEANING - DEFAULT IS KEYWORD
//export { sum as default }