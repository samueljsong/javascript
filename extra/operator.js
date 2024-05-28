/**
 * JavaScript has many cool operators
 *
 *      1. Nullish Coalescing Operator      : ??
 *      2. Logical Or Operator              : ||
 *      3. Logical And Operator             : &&
 *      4. Ternary Operator                 : ?:
 *      5. Optional Chaining Operator       : ?.
 *      6. Logical Or Assignment Operator   : ||=
 *      7. Logical And Assignment Operator  : &&=
 */

/**
 * 1. Nullish
 *
 *      Similar to Logical but checks to see if the first value is
 *          - undefined
 *          - null
 */
let name = person ?? "Guest";

/**
 * 2. Logical Or Operator
 *
 *      returns first value if truthy else it will return second value
 */
let name2 = 0 || "Guest"; // 0 is falsey so it will return Guest

/**
 * 3. Logical And Operator
 *
 *      returns the left-hand operand if it is falsy;
 *      otherwise, it returns the right-hand operand
 */
let x = 5;
let y = 10;
let result = x && y; // Returns 10 because both numbers are truthy

/**
 * 4. Optional Chaining Operator
 *
 *      allows safe access deeply nested properties.
 *          - think of the '?' as check if null and '.' as dot operator
 *      returns 'undefined' if any part of the chain is 'null' or 'undefined'
 */

let obj = { a: { b: 2 } };
let res = obj?.a?.b; // 2
let res2 = obj?.a?.d; // undefined

/**
 * 5. Nullish Assignment Operator
 *
 *      assigns a variable if it is 'null' or 'undefined'
 */

let n = null;
n ??= 10; // stores 10 in 'n'

/**
 * 6. Ternary Operator
 *
 *      shorthand for if-else statement. returns one of two values based on conditions
 */

let condition = true;
let res_condition = condition ? "yes" : "no"; // will return 'yes

/**
 * 7. Logical Or Assignment
 *
 *      assigns a value to a variable if the variable is falsy
 */

let a = 0;
a ||= 20; // a is now 20 because initial value was falsey

/**
 * 8. Logical And Assignment
 *
 *      assigns a value to a variable if the variable is truthy
 */

let b = 5;
b &&= 20; // b is now 20 because initial value was truthy
