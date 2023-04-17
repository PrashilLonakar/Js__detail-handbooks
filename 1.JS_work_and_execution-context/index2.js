//check scope-chain picture to understand execution-context in detail.

// Long story short, Everything in js happens in execution context.
// It have two component
// (i) Memory		(ii) code

// 1. It first allocate memory to variable and functions
// 2. then execute the sync part of code through callstack
// 3. and put the async part in the callback queue

// Execution context is a whole 'environment' where a function executes in
// and alos contains variable scope (and the scope chain, variables in closures),
// function arguments, and the value of the this object etc.

function sayHello() {
  console.log("Hello, " + this.name);
}

// in the global execution context
sayHello(); // Output: "Hello, undefined"

// in a function execution context
var person = { name: "John", sayHello: sayHello };
person.sayHello(); // Output: "Hello, John"
