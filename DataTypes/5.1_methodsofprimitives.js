/**
 * Methods of primitives
 *
 * Primitive: value of a pimitive type
 *      - string
 *      - number
 *      - bigint
 *      - boolean
 *      - symbol
 *      - null
 *      - undefined
 *
 * Object: capable of storing multiple values as properties
 *      - can be created with {}
 *
 * One of the best things about objects is that we can store functions.
 *
 * There are many cases we want to manipulate primitive values with functions.
 * but we want them to be single valued for performance purposes (lightweight).
 *      - JavaScript creates 'object wrappers' that provide extra functionalities
 *        and is then destroyed upon finishing.
 */

//An example is using toUppercase()

let name = "sam";
console.log(name.toUpperCase());

// You could explicitly create "wrapper objects" for primitives but is highly UNRECOMMENDED

console.log(typeof 0); // This is a number
console.log(typeof new Number(0)); // This is an Object

// And because Objects are ALWAYS truthy, even a wrapper of number 0 is truthy.

let zero = new Number(0);
if (zero) {
    console.log("zero is truthy?");
}
