/**
 * In JavaScript some values are 'coerced' into true and false
 *      - coerced = forced into
 *      - true values: truthy
 *      - false values" falsy
 *          - falsy values are things that are inherintly empty
 *              - empty string
 *              - 0
 *              - false
 *              - -0 and 0n
 *              - empty arrays
 */

let hashMap = new Map();

if (hashMap) {
    console.log("hashmap is truthy");
}

let x = 0;

if (!x) {
    console.log("x is falsey");
}

/**
 * We can use the inherint natrue of falsey to assign a value
 *
 * we assign name = user.name
 *      - logical or expression is used to check for truthy and falsey
 *          - it will return user.name if it is truthy
 *          - it will return 'Guest' as default if user.name is falsey
 */
let name = user.name || "Guest";

/**
 * Using the inherent falsey and truthy values can be good and bad
 */

// 1. Concise

// Rather than this
if (value !== null && value !== undefined && value !== 0 && value !== "") {
    //do something if value is truthy
}

// We can do this
if (value) {
    //do something if value is truthy
}

/**
 * Relying on this feature too much can be a bad thing.
 *
 *      1. Be Explicit When Necessary: when the meaning of condition can be ambiguous
 *      2. Use Default Parameters
 *      3. Combine with Type Check
 *      4. Document Code
 */
