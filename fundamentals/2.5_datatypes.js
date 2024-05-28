/**
 * A value in JavaScript has a type
 *
 * Primitive types
 *      - string
 *          - immutable: content cannot be changed once set
 *      - number
 *      - boolean
 *          - Boolean(null) = false
 *          - Boolean(undefined) = false
 *      - null
 *          - null can be used when we want to re assign a value to a variable later
 *              - Explicitly clearing a value
 *              - Initialization
 *              - function return value
 *              - DOM methods if elements are not found
 *      - undefined
 *          - Do not assign anything this. Let the compiler assign it.
 *          - Mostly assigned when there is an error in code during run time.
 *              - variable declared but not initialized
 *              - function parameters not provided
 *              - accessing non-existing object properties
 *              - functions that do not return a value will return undefined
 *              - arrays that do not have that element
 *      - BigInt
 *      - Symbol
 *
 * Object types
 *      - Object
 *      - Array
 *      - Function
 *      - Date
 *      - RegExp
 *      - Map
 *      - Set
 *
 * You can use `typeof _` to find the type of a value
 *
 */

function trial() {
    console.log("trial");
}

let x = trial();

console.log(x);
