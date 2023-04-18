//Normal Example

//In below example ,it will run line no.5 , then ignore whole getName() function jump to line no.9 ,then in line no.10 it will again jump to line no.6 ,next 7,8 once the function get completed it will move to line no.11 next again it will jump to linebo.6 to no.8

var x = 7;
function getName() {
  console.log("Hoisting in Javascript");
}
console.log("x", x); //7
getName(); //Hoisting in Javascript
console.log("getName() =", getName()); //getName() = undefined
console.log("getName =", getName); //getName = [Function: getName]

//------------------------------------------

//Hoisting Example

// Hoisting in Js is phenomenon by which access the variable and function before even intializing it.
// In Below example , we are calling value even before intializing the variable and function.

//In Js, Js reserve memory for y as well as getName(), if it's in variable it didn't find any value in it, it will return undefined in case of variable but in case of function it will return that func copy.

//so y give undefined since no value assign to a before calling.
//but we can call the function first and intialize after because function get intialize when we call function.

console.log("y", y); //undefined
getName(); //Hoisting in Javascript
console.log("getName2() =", getName2()); //getName2() = undefined
console.log("getName2 =", getName2); //getName2 = [Function: getName2]
var y = 7;

function getName2() {
  console.log("Hoisting in Javascript");
}

//So when we run a function in Js, variable has allocated memory space even before started executing.
//so for variable it is undefined, for function we get actual copy of whole function.

//------------------------------------------------

//difference hoisting in normal function and arrow funtion

//In below example getName3 will not behave like function but behave like variable
//So it will getName3 give undefined since no value assign to a before calling.

console.log("z", z); //undefined
getName3(); //ReferenceError: getName3 is not defined //behave like variable
console.log("getName3() =", getName3()); //ReferenceError: getName3 is not defined //behave like variable
console.log("getName3 =", getName3); //ReferenceError: getName3 is not defined //behave like variable
var z = 7;

getName3 = () => {
  console.log("Hoisting in Javascript");
};

//------------------------------------------

//Difference between not define and undefine

//So in below example it will look for reserved memory for z but since z is not intialize Js didn't reserved memory for z.
//So it show ReferenceError: z is not defined

//same for getName4() it will look for reserved memory for getName4() but since getName4() is not intialize Js didn't reserved memory for getName4().
//So it return ReferenceError: getName4() is not defined

console.log("a", a);
getName(); //Hoisting in Javascript
console.log("getName4() =", getName4()); //getName4() = undefined
console.log("getName4 =", getName4); //getName4 = [Function: getName4]
//var z = 7;

// function getName4() {
//   console.log("Hoisting in Javascript");
// }

//------------------------------------------------

//difference hoisting in normal function and arrow funtion
