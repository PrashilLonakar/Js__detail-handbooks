//---------------------------

//In below example, variable "b" is global scope and function a() lies in global scope

function a() {
  console.log(b);
}
var b = 10;
a();

//---------------------------

//In below example, variable "y" is function "Z" scope,function z() lies in function z() scope, function z() lies in global scope

function z() {
  var y = 10;
  x();
  function x() {
    console.log(y);
  }
}
z();
console.log(y); //ReferenceError: y is not defined

//Lexical: Its means "In heriachy" or "In a sequence"

//In above example function x() is sitting lexical inside function z()

//---------------------------
