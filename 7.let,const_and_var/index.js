console.log(b); //undefined
//console.log(a); //ReferenceError: Cannot access 'a' before initialization //a is in temporal deadzone
//console.log(c); //ReferenceError: Cannot access 'c' before initialization //c is in temporal deadzone
// console.log(z); //ReferenceError: z is not defined //Here z itself consideer as "var" variable. //since no memory allocated

let a = 10;
var b = 100;
const c = 1;

//So in aboave eaxmple if we use debuuger added on first line of code even before runnning the code Js will allocate the memory a,b,c aven before executing.
//but in case of var it will in global space but in case of b,c it is something else called script.

//"var b" memory assign to b to the var declaration and variable b is attach to glabal object.

//let a and const c ,they also allocate memory space,but they are in different memory space which is global , and we can't access that memory space w/o assign any value to it.

// since b and c is not assign to global object ,so we cant use it as a window.a or this.a.

//So in case of a , memeroy allocation haappen but value not assign because of "temporal deadzone".

//Temporal Deadzone is the time which start from  let variable hoisted until it assign some value.

//--------------

//try it in browser

//console.log(window.a); // undefine //since not a part of window object
//console.log(this.a); // undefine //since not a part of window object
//console.log(window.b); // undefine //traget it to var a
//console.log(this.b); // undefine //traget it to var b

//--------------

//difference between let and const

let e;

const f = 1000; // this will work
//const g; // give use an error // 'const' declarations must be initialized.

e = 10;
console.log(e); //10

//In briwser console

//const g;
//g = 100; //uncaught systaxError: Misssing intializer in const declaration.
//console.log(g);

//-------

//const in detail

const h = 100;
h = 200; //TypeError: Assignment to constant variable.

// let a = 100; //Cannot redeclare block-scoped variable 'a'. // syntaxError
