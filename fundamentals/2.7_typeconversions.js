/**
 * JavaScript does type conversions well but we need to hop in sometimes.
 */

/* String Conversion */
// Example: bool --> string

let value = true;
value = String(value); // value: true --> 'true'

/**
 * Numeric Conversions
 */

console.log(Number(undefined)); // --> NaN
console.log(Number(null)); // --> 0
console.log(Number(true)); // --> 1 | false --> 0

console.log("6" / "2"); // prints 3

// We can also explicitly change value BUT has to be all numbers
let val = Number("123"); // --> allowed
let val2 = Number("asd"); // --> ERR: NaN

/**
 * Boolean Conversions
 *      Values that are intuitively empty returns: false
 *          - array: []
 *          - string: ''
 *              - string with '0': --> true
 *              - spaces ' ' : --> true
 *      0, null, undefined, NaN, '' | --> false
 *      everything else --> true
 */
