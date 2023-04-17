//What is javascript?

//Javascript is synchronous single-threaded language.

//how Js code run behind the scene

//example
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);

// when we run this program the global execution context get created
// so what happen in execution context
// here an example of memory creation phase/ memory allocation phase
// you can see the detail in picture called 1.memory-creation-phase.png for global phase

//So in memory-creation-phase intially it will assign a value as undefined to variables and assign function body to a function.
//as shown in 1.memory-creation-phase.png

//Now once code memory is allocated it move to the next pase called code execution phase where it will assign value to global variable.

//Now as you can see , we are in global code execution phase , so when it try execute function in this phase it will create execution context instance of that function and jump to that function instance called as "square function" phase from global phase, Now in square function phase it will again go through memory execution as well as code execution phase .One's the function is get executed , then whole execution context for that instance of that function will get deleted. Again it will jump to global instance and start executing next line.

//you can check 3.function-memory-then-code-execution-phase.png for detail

//again same thing happen with 4.2nd_function-memory-then-code-execution-phase.png

// ones all the code get executed global instance of execution context get deleted.
