console.log(a); //undefined
var a = 7;
console.log(a); //7

//Js will allocate a memory to "a" even before this line of code run.
//So "a" in memory execution context is undefined.

// Js tries to placeholder to variable "a" which placed in the memory in memory execution phase/memory allocation phase

//undefined is taking memory during memory execution phase.

//undefined is not equal to empty.
//undefined ,it is special keyword ,it takes its own memory,It is like placeholder,whcih is timebeing until you assign a value, till that point it will store this placeholder called "undefined".

//----------------

//console.log(x); //ReferenceError: x is not defined

//In above example, Js will try to find x to allocate the memory but since it is defined it will give us an error : Reference Error : x is not defined

//not defined is somethng that is not allocated the memmry for.

//---------------

var b;
console.log(b);

//In above program , it will continue to have a placeholder as undefined

//------------------

var p;

console.log(p); //undefined

//p is undefined
if (p === undefined) {
  console.log("p is undefined");
} else {
  console.log("p is not undefined");
}

//--------------

var q;
console.log("q", q); //q undefined
q = 10;
console.log("10", q); //10 10
q = "hello world";
console.log("hello world", q); //hello world hello world

//---------------

var l = undefined;
console.log(l);
//we can assign undefined to a variable, It's not preferrable to asign undefined to a variable.
//undefined, state that in whole code that variable "l" is not assign anything.
//we can assign undefined to a variable ,but its not a good practice to do it.
//undefined meant to check wheather that variable is assign something or not.
