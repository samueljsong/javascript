/**
 * Functions: main building blocks of code as they allow repetition of code.
 */

function test() {
    console.log("this is how we make a function");
}

// functions also have parameters that we can pass
function addition(a, b) {
    return a + b;
}

// we can declare a default value that the parameter will use if the function is not provided anything.
function subtraction(a = 10, b = 8) {
    return a - b;
}

/**
 * We can also pass functions as a parameter to another function. This is called a callback function.
 *      - Purpose of a callback: execute a function after a function has been finished.
 */
function callBack() {
    console.log("calling the call back function");
}

async function useCallBack(cb) {
    console.log("I will be calling the call back function in three seconds...");
    setTimeout(() => {
        cb();
    }, 3000);
}

useCallBack(callBack);

/**
 * Functions will ALWAYS return something.
 *      - if the return statement is not explicitly specified, it will return 'undefined'
 */

function returnSomething() {}
console.log(returnSomething()); // this will print out undefined

/**
 * Local variables: variables declared within the scope of the function.
 *      - cannot be accessed outside of the function
 *
 * Global variables: variables declared outside the scope of a function.
 *      - can be accessed and modified by a function.
 */

let globalVariable = 5; // This is considered a global variable
function localVariable() {
    let local_var = 9; // this can only be used by the function localVariable
    globalVariable += globalVariable;
    console.log(globalVariable); // This will print out 10
}
localVariable();
