/**
 * =============================================
 * COMMON MISTAKES & GOTCHAS
 * =============================================
 *
 * Things that trip people up in tests.
 * Read this so you don't fall into these traps!
 */


// =============================================
// GOTCHA 1: Forgetting to RETURN
// =============================================

// WRONG - forgot return, gets undefined
const bad = [1, 2, 3].map(n => {
  n * 2;  // This does nothing!
});
console.log("Gotcha 1 (wrong):", bad);  // [undefined, undefined, undefined]

// RIGHT - with return
const good = [1, 2, 3].map(n => {
  return n * 2;
});
console.log("Gotcha 1 (right):", good);  // [2, 4, 6]

// RIGHT - short version (no curly braces = automatic return)
const better = [1, 2, 3].map(n => n * 2);
console.log("Gotcha 1 (better):", better);  // [2, 4, 6]

/*
 * RULE: If you use { } curly braces, you MUST write "return"
 *       If you skip { }, the return is automatic
 */


// =============================================
// GOTCHA 2: == vs === (Use === always!)
// =============================================

// == does weird conversions
console.log("\nGotcha 2:");
console.log("5" == 5);    // true (string "5" converted to number)
console.log("5" === 5);   // false (different types)

console.log(0 == false);  // true (weird!)
console.log(0 === false); // false (correct - different types)

/*
 * RULE: ALWAYS use === (triple equals)
 *       Forget == even exists
 */


// =============================================
// GOTCHA 3: Sorting numbers wrong
// =============================================

const nums = [10, 2, 30, 4];

// WRONG - sorts as strings! (1, 2, 3, 4 by first character)
const wrongSort = [...nums].sort();
console.log("\nGotcha 3 (wrong):", wrongSort);  // [10, 2, 30, 4] - WRONG!

// RIGHT - must provide compare function for numbers
const rightSort = [...nums].sort((a, b) => a - b);
console.log("Gotcha 3 (right):", rightSort);  // [2, 4, 10, 30]

/*
 * RULE: For numbers, ALWAYS use .sort((a, b) => a - b)
 */


// =============================================
// GOTCHA 4: Modifying original array
// =============================================

const original = [3, 1, 2];

// WRONG - sort() changes the original array!
original.sort((a, b) => a - b);
console.log("\nGotcha 4 (original changed):", original);  // [1, 2, 3]

// RIGHT - make a copy first with spread [...]
const original2 = [3, 1, 2];
const sorted = [...original2].sort((a, b) => a - b);
console.log("Gotcha 4 (original safe):", original2);  // [3, 1, 2] - unchanged
console.log("Gotcha 4 (new sorted):", sorted);        // [1, 2, 3]

/*
 * RULE: Use [...array] to make a copy before sort/reverse
 *       These methods CHANGE the original:
 *       - sort()
 *       - reverse()
 *       - push() / pop()
 *       - shift() / unshift()
 *       - splice()
 *
 *       These are SAFE (return new array):
 *       - map()
 *       - filter()
 *       - slice()
 *       - concat()
 */


// =============================================
// GOTCHA 5: find() returns undefined, not empty
// =============================================

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const found = users.find(u => u.id === 999);
console.log("\nGotcha 5:", found);  // undefined (NOT [] or null)

// So if you need to check:
if (found) {
  console.log("Found user!");
} else {
  console.log("User not found");
}

// Or with optional chaining:
console.log(found?.name);  // undefined (no error)


// =============================================
// GOTCHA 6: filter() returns array, find() returns item
// =============================================

const numbers2 = [1, 2, 3, 4, 5];

const filtered = numbers2.filter(n => n > 3);
console.log("\nGotcha 6 - filter:", filtered);  // [4, 5] - an ARRAY

const found2 = numbers2.find(n => n > 3);
console.log("Gotcha 6 - find:", found2);  // 4 - a single NUMBER

/*
 * RULE: filter = always returns array (maybe empty [])
 *       find   = returns one item (or undefined)
 */


// =============================================
// GOTCHA 7: reduce() needs starting value
// =============================================

const prices = [10, 20, 30];

// Can fail or give weird results without starting value
// ALWAYS provide the starting value (0 for sums, [] for arrays, {} for objects)

const sum = prices.reduce((total, price) => total + price, 0);  // Start at 0
console.log("\nGotcha 7:", sum);  // 60

// Building an array? Start with []
const doubled2 = prices.reduce((arr, price) => {
  arr.push(price * 2);
  return arr;
}, []);  // Start with empty array

console.log("Gotcha 7 (array):", doubled2);  // [20, 40, 60]

// Building an object? Start with {}
const priceMap = prices.reduce((obj, price, index) => {
  obj[`item${index}`] = price;
  return obj;
}, {});  // Start with empty object

console.log("Gotcha 7 (object):", priceMap);  // { item0: 10, item1: 20, item2: 30 }


// =============================================
// GOTCHA 8: null vs undefined
// =============================================

let a;           // undefined (never assigned)
let b = null;    // null (intentionally empty)

console.log("\nGotcha 8:");
console.log(a);  // undefined
console.log(b);  // null

// Both are "falsy" - so this works:
if (!a) console.log("a is empty");
if (!b) console.log("b is empty");

// But they're not equal with ===
console.log(null === undefined);  // false


// =============================================
// GOTCHA 9: String numbers in objects
// =============================================

// Sometimes data comes with numbers as strings
const product = { price: "25.50" };

// WRONG - adds strings together
const wrongTotal = product.price + product.price;
console.log("\nGotcha 9 (wrong):", wrongTotal);  // "25.5025.50" oops!

// RIGHT - convert to number first
const rightTotal = Number(product.price) + Number(product.price);
console.log("Gotcha 9 (right):", rightTotal);  // 51

// Other ways to convert:
const num1 = Number("42");     // 42
const num2 = parseInt("42");   // 42 (whole number)
const num3 = parseFloat("3.14"); // 3.14 (decimal)
const num4 = +"42";            // 42 (shortcut with +)


// =============================================
// GOTCHA 10: Accessing nested properties safely
// =============================================

const user = {
  name: "Alice",
  address: {
    city: "London"
  }
};

// This works
console.log("\nGotcha 10:", user.address.city);  // "London"

// But what if address doesn't exist?
const user2 = { name: "Bob" };

// WRONG - will crash!
// console.log(user2.address.city);  // ERROR!

// RIGHT - use optional chaining (?.)
console.log(user2.address?.city);  // undefined (no error)

// Or check first:
if (user2.address && user2.address.city) {
  console.log(user2.address.city);
}


// =============================================
// GOTCHA 11: Empty array is truthy!
// =============================================

const emptyArray = [];

// This might surprise you:
if (emptyArray) {
  console.log("\nGotcha 11: Empty array is truthy!");  // This runs!
}

// To check if array has items:
if (emptyArray.length > 0) {
  console.log("Has items");
} else {
  console.log("Gotcha 11: Array is empty");  // This runs
}

/*
 * RULE: To check if array is empty, use: array.length === 0
 *       Don't use: if (!array)
 */


// =============================================
// GOTCHA 12: forEach returns undefined
// =============================================

const result = [1, 2, 3].forEach(n => n * 2);
console.log("\nGotcha 12:", result);  // undefined!

// forEach is for DOING things, not GETTING things
// If you need results, use map:
const result2 = [1, 2, 3].map(n => n * 2);
console.log("Gotcha 12 (use map):", result2);  // [2, 4, 6]


// =============================================
// GOTCHA 13: indexOf returns -1 when not found
// =============================================

const fruits = ["apple", "banana", "cherry"];

console.log("\nGotcha 13:");
console.log(fruits.indexOf("banana"));  // 1
console.log(fruits.indexOf("grape"));   // -1 (not found)

// WRONG way to check:
if (fruits.indexOf("grape")) {  // -1 is truthy!
  console.log("This still runs because -1 is truthy!");
}

// RIGHT way to check:
if (fruits.indexOf("grape") !== -1) {
  console.log("Found it");
} else {
  console.log("Not found");
}

// BETTER - use includes() for simple checks:
if (fruits.includes("grape")) {
  console.log("Found it");
} else {
  console.log("Gotcha 13: Use includes() instead");
}


// =============================================
// GOTCHA 14: Modifying objects in arrays
// =============================================

const people = [
  { name: "Alice", score: 0 },
  { name: "Bob", score: 0 }
];

// Be careful - this modifies the ORIGINAL objects:
people.forEach(person => {
  person.score = 100;  // This changes the original!
});

console.log("\nGotcha 14:", people);
// [{ name: "Alice", score: 100 }, { name: "Bob", score: 100 }]

// If you need a new array with new objects:
const originalPeople = [
  { name: "Alice", score: 0 },
  { name: "Bob", score: 0 }
];

const newPeople = originalPeople.map(person => ({
  ...person,        // Copy all properties
  score: 100        // Override score
}));

console.log("Original:", originalPeople);  // scores still 0
console.log("New:", newPeople);            // scores are 100


console.log("\n✓ Now you know the traps to avoid!\n");
