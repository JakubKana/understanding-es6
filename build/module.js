
export function giveRandom() {
    return Math.round(Math.random()*10);
} 

export function log(message) {
    console.log(message)
}


export default class Logger {
    constructor(name)
    {
        this.name = name;
    }

}