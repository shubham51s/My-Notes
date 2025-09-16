/*

    # Variables (var, let & const):
        1. var (legacy keyword):
            - Function scoped: it is available anywhere within the same function it is declared in
            - Can be re-assign (update) & redeclare
            - Hoisted & initialized with undefined
            - It is not block scoped: blocks like if, for & while statements do not create a new scope for var variables

        2. let:
            - Block scoped ({}): it is only accesible within the nearest curly braces, such as inside if block or for loop
            - Can be re-assign (update) but not redeclare
            - Hoisted but not initialized (temporal dead zone)
                let declarations are also hoisted to the top of their block. However, unlike var, they are not initialized. The period from the start of the block until the declaration is executed is called the Temporal Dead Zone (TDZ). Accessing the variable in the TDZ will result in a ReferenceError

        3. const:
            - Block scoped
            - cannot re-assign (update) or redeclare
            - Hoisted but not Initialized (Temporal Dead Zone)


    # Javascript is a dynamically typed language: variables are not bound to a specific type when declared
        
    # Data types: 

        1. Primitive types (value types): 
            - This are immutable (cannot be changed) & stored directly in memory. When assigned to a variable contains the actual value
            - example: String, Number, BigInt, Boolean, Undefined, Null, Symbol
        
        2. Reference type (Objects)
            - This are mutable & stored by reference. When assigned to variable, a variable contains a reference (memory address) to the actual data
            - example: Object, Array, Function, Date

    # Functions

        1. Function declaration:
            - it starts with function keyword
            - it must have the function name
            - it does not require a variable assignment
            - fully hoisted, can be called before it is defined

        2. Function expression:
            - the function itself can be either named or anonymous
            - can be stored in a variable assignment
            - not hoisted

        Immediately Invoked Function Expressions (IIFEs):
            - it's a js function which runs as soon as it is defined. It is also known as self-executing anonymous function
            - it contains 2 major parts
                1. a function expression
                2. immediately calling the function expression
            - IIFEs are commonly used to create private scope

    # DOM (Document Object Model):
		DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic

		The DOM views an HTML document as a tree of nodes. A node represents an HTML element.

		When a web page is loaded, the browser creates a Document Object Model of the page.
		The HTML DOM model is constructed as a tree of Objects
		The DOM is not part of the JavaScript language, but is instead a Web API used to build websites.

		With the object model, JavaScript gets all the power it needs to create dynamic HTML:
			JavaScript can change all the HTML elements, HTML attributes, all the CSS in the page
			JavaScript can remove existing HTML elements and attributes
			JavaScript can add new HTML elements and attributes
			JavaScript can react to all existing HTML events in the page
			JavaScript can create new HTML events in the page
*/

// # Prototypes in JS:

// 		Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// 		In JavaScript, every object has an internal link to another object called its prototype. This prototype object can have properties and methods that are shared across all objects that inherit from it.

// example
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  console.log(this.name);
};

const user1 = new Person("user-1");
user1.getName();

// here in above code getName is not stored separately while creating new object but it defined in Person's prototype so all instances created from Person object can access it

// # Prototype chain:
// 		The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
// 		When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.
