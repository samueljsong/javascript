/**
 *
 * Strings in JavaScript is iterable and is immutable.
 *
 *      iterable: an Object that can be looped over or iterated with the help of a loop
 *      immutable: once created, the content cannot be changed.
 *          - even if we were to do string.toLowerCase(), the result it gives may be changed
 *            but the actual value will stay the same.
 */

/**
 * concat()
 *      Used to merge more than 2 strings.
 *      Does not change existing strings.
 *      Method returns a new String.
 */

let a = "a";
let b = "b";
console.log(a.concat(b));
console.log(a.concat(" ", b));

/**
 * endsWith()
 *      returns a Boolean depending if the string ends with a specified string.
 *      case sensitive.
 */

let phrase = "hello world";
console.log(phrase.endsWith("world"));
console.log(phrase.endsWith("WORLD"));

/**
 * includes()
 *
 * string.includes(searchvalue, startIDX)
 *      checks to see if specified string is inside another string.
 *      case sensitive
 */

let phrase2 = "this is a phrase";
console.log(phrase2.includes("i")); // the i is found in 'this'
console.log(phrase2.includes("i", 4)); // the i is found in 'is'
