function x() {
  var a = 7;
  function y() {
    console.log(a); //lexical scope //7
  }
  y();
}
x();

//what is closure?

//A function bind together with its lexical environment/scope. or
//function along with its lexical scope forms a closure.

//-------------------

//best example for closure.

function p() {
  var z = 7;
  function q() {
    console.log("z", z); //z 7
  }
  return q;
}
var b = p();
console.log(b); //[Function: q]
b();

//same thing we can write like this

function p() {
  var z = 7;
  return function q() {
    console.log("z", z); //z 7
  };
}
var b = p();
console.log(b); //[Function: q]
b();

//--------------------

//Reference by address and reference by value.

function p() {
  var z = 7;
  function q() {
    console.log("z", z); //z 100 //it shoould be 7 but we het 100 why?
  }
  z = 200;
  return q;
}
var b = p();
console.log(b); //[Function: q]
b();

//becasuse in above example value get save by reference by address instead of reference by value.

//---------------

//closure scope
function r() {
  var b = 900;
  function p() {
    var z = 7;
    function q() {
      console.log("z", z, "b", b); //z 7 b 900
    }
    q();
  }
  p();
}
r();

//In browser console, you check it shows
//closure p() z: 7

//closure r() b: 900

//------------------------

//Uses of closure.

//-Module Design Pattern
//-Currying
// Function like one
// memorize
// maintaining state in async world
// setTimeout
// Iterators
// and many more...
