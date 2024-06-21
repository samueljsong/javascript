/**
 * Function Expressions
 *
 * In JavaScript, function is a special kind of value.
 */

// Function Declaration
function declaration() {
    console.log("This is a function DECLARATION");
}

//Function Expression
//Because the expression below is similar to a variable assignment, we add the semicolon at the end.
let expression = function () {
    console.log("This is a function EXPRESSION");
};

/**
 * Function is a value, which means that both examples above store a function.
 *      The first one is storing the function inside 'declaration'
 *      The second one stores the function inside 'expression'
 */

// If we do not add the '()' after a function, it will not run.
console.log(expression); // Prints our the function expression.

// We can also copy the function into another variable.
let secondExpression = expression;

// And we can call on both the functions if we want
secondExpression();
expression();

// We can also used function expressions inside 'expressions'
console.log(secondExpression === expression);

if (secondExpression) {
    console.log("Function Expressions are Truthy");
}

/**
 * Callback Functions
 *
 * Passing a function as a parameter to another function.
 *      The idea is that we expect it to be "called back" later if necessary
 */
// function confirm() {
//     console.log("CONFIRM");
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// function showOk() {
//     alert("You agreed.");
// }

// function showCancel() {
//     alert("You canceled the execution.");
// }

// usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);

// But we can also use Function expression to declare the callback function inside the 'ask' function

// ask(
//     "Do you agree?",
//     function () {
//         alert("You agreed.");
//     },
//     function () {
//         alert("You canceled the execution.");
//     }
// );

// Just like global variables, if we use strict mode, a Function Declaration is block scoped.

/**
 * Summary:
 * Functions are values that can be assigned copied or declared.
 * if the function is declared as a separate statement in the main code flow, it is called a Function Declaration
 * if the function is created as a part of an expression, it's called a Function Expression
 * Function Declarations are processed BEFORE the code block is executed. (also block scoped)
 * Function expressions are created when the execution flow reaches.
 */
