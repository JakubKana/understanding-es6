import 'babel-polyfill';

// Classes
//ECMAScript 5 class

function PersonType(name) {
    this.name = name;
}

PersonType.prototype.sayName = function() {
    console.log(this.name);
};

var person = new PersonType("Nicholas");

person.sayName(); // outputs "Nicholas"

console.log(person instanceof PersonType);
console.log(person instanceof Object);


// ECMASCRIPT 5 INHERITANCE PAIN
function ProgrammerPerson(mainLanguage) {
    PersonType.call(this, "Kubus");   
    this.mainLanguage = mainLanguage;
}

// Circle derives from Shape
ProgrammerPerson.prototype = Object.create(PersonType.prototype);
ProgrammerPerson.prototype.constructor = ProgrammerPerson;

var programmer = new ProgrammerPerson("see sharp");
 
console.log("Main language",programmer.mainLanguage);


class PersonClass {
    // equivalent of the PersonType constructor

    constructor(name) {
        this.name = name;
    }

    // equivalent of PersonType prototype.sayName
    sayName() {
        console.log(this.name);
    }
}


var person = new PersonClass("Kubus");

person.sayName();

console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true

console.log(typeof PersonClass); // "function"
console.log(typeof PersonClass.prototype.sayName); // "function"

// Class prototypes are read-only that means you cannot assing a new value to the prototype like you can with functions

// Why Use the Class syntax?
/*
1) Class declarations are not hoisted. Function declarations are hoisted 
Class declarations act like let they exist in the temporal dead zone until execution reaches declaration
2) All code inside class declarations runs in the strict mode automatically.
There's no way to opt out of strict mode inside classes
3) All methods are nonenumerable. 
4) All methods lack an internal [[Construct]] method and will throw an error if you try to call
them with new
5) Calling the class constructor without new throws an error
6) Attempting to overwrite the class name within a class method throws an error
*/


//CONSTANT CLASS NAMES
/**
 * The class name is only constant inside the class itself.
 * That means you can overwrite the class name outside the class but not inside a class method
 * 
 */

 class Foo {
     constructor() {
         // Error
       //  Foo = "bar";
     }
 }

 // Class name can be overwritten here
 Foo = "Bazmek";
console.log(Foo);

// Class Expressions
// A Basic Class Expression
let PersonClassExpressionBody = class {
    // equivalent of the PersonType constructor
    constructor(name) {
        this.name = name;   
    }

    // equivalent of PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
};

let personBody = new PersonClassExpressionBody("Person");
personBody.sayName();

// Difference is that expression body can have name property empty 
// Class declarations always have a name property


// Name class expressions
let PersonNameClass = class PersonNameClass2 {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}


console.log(typeof PersonNameClass);
console.log(typeof PersonNameClass2);

// named class expression changes what s happenning in the JS engine.
// Named class expression uses its name in the const definiction so PersonClass2 is defined fo use only inside the class.

// Classes as First-Class Citizens
// In programming, a first-class citizen is a value that can be passed into a function, returned from a function
// and assigned to a variable. JavaScript functions are first-class citizens (also called first-class functions)
// And they're part of what makes JavaScript unique.



First-class citizens is a value that can be passed into a function, returned froma  function
and assigned toa  variable
Javascript functions are first-class citizens (also called first-class functions)


// function that returns new instance of passed class
function createObject(classDef) {
    return new classDef();
}

// new instance of an object is stored into obj variable
let obj = createObject(class {
    sayHi() {
        console.log("Hi!");
    }
});

obj.sayHi(); // "Hi!"


// Another use of class expressions is creating singletons by invoking class constructor.
let personSingleton = new class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}("Nicholas");

personSingleton.sayName();

//Accessor Properties
/**
 * Getter use GET keyword "get"
 * Setter use SET keyword "set"
 * Followed by a space, followed by identifier
 */
class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element.innerHTML;
    }

    set html(value) {
        this.element.innerHTML = value;
    }
}

var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html");
console.log("get" in descriptor); // true
console.log("set" in descriptor); // true
console.log(descriptor.enumerable); // false

// Computed Member Names
let computedName = "sayComputed";
class MemberNames {
    constructor(computed) {
        this.computed = computed;
    }
    [computedName]() {
        console.log(this.computed);
    }

}

let htmlProperty = "elementName";
class ExtendedMemberNames{
    constructor(element,name) {
        this.items = ['one','two','three'];
        this.element = element;
        this._name = name;
    }
    get [htmlProperty]() {
        return this._name;
    }
    set [htmlProperty](value) {
        if(!value) 
            throw new Error("Value not provided");
        this._name = value;
    }

    
        *[Symbol.iterator]() {
            // for (let item of this.items) {
            //     yield item;
            // }
            yield *this.items.values();
    }
}

let memberNames = new MemberNames(`Calling ${computedName}() value`);
memberNames.sayComputed();
console.log("Computed accessor names");
let extendedMemberNames = new ExtendedMemberNames('ElementName','ss');

 console.log(extendedMemberNames.elementName);
 extendedMemberNames.elementName = 'awesome';
 console.log(extendedMemberNames.elementName);
 let iteratorFromClass=extendedMemberNames[Symbol.iterator]();
 console.log(iteratorFromClass.next());
 console.log(iteratorFromClass.next());
 console.log(iteratorFromClass.next());

console.log(extendedMemberNames);



// GENERATOR METHODS

class MyClass {
    *createIterator() {
        yield 1;
        yield 2;
        yield 3;
    }
}


let instance = new MyClass();
let iterator = instance.createIterator();

class Collection {
    constructor() {
        this.items = [];
    }

    *[Symbol.iterator]() {
        yield *this.items.values();
    }
}

var collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for (let x of collection) {
    console.log(x);
}

//Output
//1 2 3


// STATIC MEMBERS 
// ECMAScript 5
function PersonType(name) {
    this.name = name;
}

// static method
PersonType.create = function(name) {
    return new PersonType(name);
};

// instance method
PersonType.prototype.sayName = function() {
    console.log(this.name);
};

var person = PersonType.create("Nicholas");
person.sayName();
// ECMAScript 6
// Static members

class PersonStaticClass {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }

    static create(name) {
        return new PersonStaticClass(name);
    }
}

// Static members are not accessible from instances. You must always access static members from the class directly

const personNicholas = PersonStaticClass.create("Nicholas static");
personNicholas.sayName();

// inheritance with Derived Classes

class Rectangle {
    constructor(lenght, width) {
        this.length = lenght;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
    static create(length, width) {
        return new Rectangle(length,width);
    }
}

class Square extends Rectangle {
    constructor(length) {
        // equivalent of Rectangle.call(this, length, length)
        super(length, length);
    }
}

let square = new Square(3);

console.log(square.getArea()); // 9
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true

// Classes that inherit from other classes are referred as derived

class Circle extends Round {
    // no constructor
}

class Circle extends Round {
    constructor(...args) {
        super(...args);
    }
}

// Shadowing Class Methods

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }

    getArea() {
        //return this.length * this.length;
        // to call base class method use SUPER keyword
        return super.getArea();
    
    }


}

const square = new Square(5);
const rectangle = new Rectangle(5,5);
console.log(square.getArea());
console.log(rectangle.getArea());

// Inherited Static Members

let recStatic = Rectangle.create(4,3);
console.log(recStatic.getArea());
let squareStatic = Square.create(4,4);
console.log(squareStatic.getArea());


// Derived Classes from Expressions
function Rectangle(length, width) {
    this.length=length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
    return this.length * this.width;
};

function getBase() {
    return Rectangle;
}

class SquareExpress extends getBase() {
    constructor(lenght) {
        super(length, length);
    }
}

const x = new SquareExpress(11);
console.log(x.getArea());

let SerializableMixin = {
    serialize() {
        return JSON.stringify(this);
    }
};

let AreaMixin = {
    getArea() {
        return this.length * this.width;
    }
};

function mixin(...mixins) {
    var base = function() {};
    Object.assign(base.prototype, ...mixins);
    return base;
}

class Square extends mixin(AreaMixin, SerializableMixin) {
    constructor(length) {
        super();
        this.length = length;
        this.width = length;
    }
}

let x = new Square(11);
console.log(x.getArea());
console.log(x.serialize());

// Ingeriting from Built-Ins
var colors = [];
colors[0] = "red";
console.log(colors.length); // 1
colors.length = 0;

console.log(colors[0]);

// In ECMAScript 6
class MyArray extends Array {
    // empty
}

let myColors = new MyArray();
myColors[0] = "purple";
console.log(colors.length); // 1
colors.length = 0;
console.log(colors[0]);

// The Symbol.species Property

let items = new MyArray(1,2,3,4),
subitems = items.slice(1,3);

console.log(items instanceof MyArray);
console.log(subitems instanceof Array);

/*
Following built in types have Symbol.species defined
Array, ArrayBuffer, Map, Promise, RegExp, Set, Typed Arrays
*/


// USING new.target in Class Constructors
class NewTarget {
    constructor(length,width) {
      //  console.log(new.target === NewTarget);
        this.length = length;
        this.width = width;
        console.log(new.target);
    }
}

let obj = new NewTarget(3,5);

class Triangle extends NewTarget{
    constructor(length) {
        super(length,length);
    }
}

// new.target is Square
let obj1 = new Triangle(3);
console.log(obj);
console.log(obj1);


// Abstract base class
class Shape {
    constructor() {
        // if(new.target === Shape) {
        //     throw new Error("This class cannot be instantiated directly.");
        // }
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
}

//let x = new Shape();

let y = new Rectangle(3,4);
console.log(y instanceof Shape);