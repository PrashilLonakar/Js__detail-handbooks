//let and const are block scope

//var is funtion scope

//block scope example

{
  var a = 10;
  let b = 20;
  const c = 100;
}

console.log(a);
// console.log(b); //ReferenceError: b is not defined //b is intialize as let which is block scope

//try this browser

{
  var a = 10;
  let b = 20;
  const c = 100;

  console.log(a); //10
  console.log(b); //20
  console.log(c); //100
}
//during memory allocation for a,b,c as undefined.
//It will show the b and c in block scope and a in global scope.

//we can't access b,c outside the block scope.

console.log(a); //10
//console.log(b); //ReferenceError: b is not defined
//console.log(c); //ReferenceError: c is not defined

//--------------

//Shadowing in Js

var z = 100;
let y = 200;
const x = 100;
console.log(z); //100
{
  var z = 20;
  let y = 300;
  const x = 40;
}

console.log(z); //20
console.log(y); //200
console.log(x); //100

//var z is get shadow because z is in global scope.

//So y is also shadow? ,no y is not shadow because one y is in global and another y is in block scope both y work on seperate oject memory with different value.

// In above case const should given an error because we changing and reintializing the x as const ,but since const is block scope both x vatiable work as diferent entity wuith dififerent scope object.

//--------------

let q = 100;
{
  // var q = 200; //Cannot redeclare block-scoped variable 'q'.
}

//In above example we already intialize variable q as let and let won't let us reintialize the value to same variable with let keyword.

//so to run above code, we need to use function scope instead of block scope because "var" is function scope, not block scope. as shown below example.

let p = 100;
function func() {
  var p = 200;
  console.log("p function scope", p); //p function scope 200
}

func();
console.log("p global scope", p); //p global scope 200

//-------------

//Lexical scope

{
  const a = 10;
  {
    const a = 20;
    {
      const a = 30;
      console.log(a); //30
    }
    console.log(a); //20
  }
  console.log(a); //10
}

//" var " is function scope doesn't matter how you create as a simple function or arrow function.
