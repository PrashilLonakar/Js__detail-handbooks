//When we run an empty program even then it will global execution context and also create some memory space
//It will also create Window

//So what is Window?

//It is the big object with lot of function and method which in  global space ,we can access all this variable in Js program , this functionality provided by Js.
//So window is global object which is created along with Global execution created as well as this key word get created.

//So JS engine create this global object ,In case of browser it called "window", in case of node it called something else.

//example

// try this in browser console
// if (this === window) {
//   console.log("this is equal to window");
// }

//-------------------

//example 2

var a = 10; //global space

//global space function
function b() {
  var x = 20; //function b space
}

//In Above example you will find a and b in window object since it lie in global space these is no x . x will be present in function b space

//--------------

//example 3
// try this in browser console

// var x = 10;
// function y() {
//   var z = 100;
// }
// console.log(window.x);
