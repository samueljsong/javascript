/**
 * Before ES5, JavaScript was designed with a lot of flexibility and leniency
 * to accomadate different coding styles and to make it easier for new devs.
 *
 * 'use strict' was introduced in ECMAScript 5 (ES5)
 *      - address the shortcoming and problematic features of JavaScript
 *          - eliminates silent errors
 *          - discourage bad practices
 *          - future proof code
 */

/* NON-STRICT */

// 1. Accidental Globals
x = 10;

// 2. Silent Features
var obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });
obj.x = 9; // Fails silently

// 3. Reserved Keywords
var public = 1; // Allowed

// Simpler 'this' binding
function f() {
    return this; // Returns the global object
}

// 4. Avoid Duplicate Parameters
function sum(a, a, c) {
    // 2 a's are allowed.
    return a + a + c;
}

/**
 * Strict mode will throw an error to all these.
 */
