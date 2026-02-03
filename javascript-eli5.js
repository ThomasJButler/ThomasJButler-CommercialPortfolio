/**
 * =============================================
 * JAVASCRIPT FOR HUMANS (ELI5 Edition)
 * =============================================
 *
 * No jargon. No fluff. Just what you need.
 *
 * Think of this like a recipe book -
 * you don't need to understand chemistry to cook.
 * Just follow the patterns!
 */


// =============================================
// PART 1: THE BASICS (2 minutes)
// =============================================

// VARIABLES = Boxes that hold stuff
// ---------------------------------

const name = "Thomas";     // A box called "name" holding "Thomas"
                           // const = this box NEVER changes

let score = 0;             // A box called "score" holding 0
score = 10;                // let = this box CAN change


// TWO TYPES OF "CONTAINERS" YOU'LL SEE:
// -------------------------------------

// ARRAY = A shopping list (ordered, numbered starting at 0)
const fruits = ["apple", "banana", "cherry"];
//               0         1          2      <-- positions

fruits[0];  // "apple"     (first item)
fruits[1];  // "banana"    (second item)
fruits[2];  // "cherry"    (third item)


// OBJECT = A form with labels (like a contact card)
const person = {
  name: "Thomas",
  age: 30,
  city: "London"
};

person.name;   // "Thomas"
person.age;    // 30
person.city;   // "London"


// =============================================
// PART 2: THE 5 MAGIC WORDS (This is 90% of your test!)
// =============================================

/*
 * Your test will give you an array or object.
 * You'll need to DO something to it.
 *
 * There are only 5 things you really need:
 *
 *   1. map     = Change every item
 *   2. filter  = Keep only some items
 *   3. find    = Get ONE specific item
 *   4. reduce  = Squash everything into one thing
 *   5. forEach = Do something with each item (but return nothing)
 */


// ----- 1. MAP = "Change every item" -----
//
// Imagine: You have a box of white t-shirts.
// You dip each one in blue dye.
// Now you have a box of blue t-shirts.
// Same number of shirts, but they're all changed.

const numbers = [1, 2, 3];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);  // [2, 4, 6]

// SHORTER WAY (arrow function - same thing, less typing):
const tripled = numbers.map(num => num * 3);

console.log(tripled);  // [3, 6, 9]

// REAL EXAMPLE: Get just the names from a list of people
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const names = people.map(person => person.name);

console.log(names);  // ["Alice", "Bob", "Charlie"]


// ----- 2. FILTER = "Keep only some items" -----
//
// Imagine: You have a bag of mixed candy.
// You pick out only the red ones.
// Now you have fewer candies, but they're all red.

const ages = [12, 18, 25, 8, 30];

const adults = ages.filter(function(age) {
  return age >= 18;  // Keep if 18 or older
});

console.log(adults);  // [18, 25, 30]

// SHORTER WAY:
const kids = ages.filter(age => age < 18);

console.log(kids);  // [12, 8]

// REAL EXAMPLE: Get people older than 25
const olderPeople = people.filter(person => person.age > 25);

console.log(olderPeople);
// [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]


// ----- 3. FIND = "Get ONE specific item" -----
//
// Imagine: You lost your keys in a drawer.
// You dig through until you find them.
// You stop looking once you find them.

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const bob = users.find(user => user.id === 2);

console.log(bob);  // { id: 2, name: "Bob" }

// If nothing matches, you get "undefined"
const nobody = users.find(user => user.id === 999);

console.log(nobody);  // undefined


// ----- 4. REDUCE = "Squash into one thing" -----
//
// Imagine: You have a stack of coins.
// You count them all up.
// Many coins become ONE number (the total).

const prices = [10, 20, 30];

const total = prices.reduce(function(runningTotal, price) {
  return runningTotal + price;
}, 0);  // <-- Start counting from 0

console.log(total);  // 60

// SHORTER WAY:
const sum = prices.reduce((total, price) => total + price, 0);

console.log(sum);  // 60

// REAL EXAMPLE: Add up all the ages
const totalAge = people.reduce((sum, person) => sum + person.age, 0);

console.log(totalAge);  // 90 (25 + 30 + 35)


// ----- 5. forEach = "Do something with each" -----
//
// Like map, but you don't get anything back.
// Use it when you just want to DO stuff (like print).

const colors = ["red", "green", "blue"];

colors.forEach(color => {
  console.log("I see " + color);
});
// "I see red"
// "I see green"
// "I see blue"


// =============================================
// PART 3: COMMON RECIPES (Copy-paste these!)
// =============================================

// RECIPE 1: Get one property from each object
// -------------------------------------------
// INPUT:  Array of objects
// OUTPUT: Array of just one property

const products = [
  { name: "Apple", price: 1.50 },
  { name: "Banana", price: 0.75 }
];

const productNames = products.map(item => item.name);
// ["Apple", "Banana"]

const productPrices = products.map(item => item.price);
// [1.50, 0.75]


// RECIPE 2: Filter objects by a property
// --------------------------------------
// INPUT:  Array of objects
// OUTPUT: Array with only matching objects

const expensiveItems = products.filter(item => item.price > 1);
// [{ name: "Apple", price: 1.50 }]


// RECIPE 3: Find a specific object
// --------------------------------
// INPUT:  Array of objects + what you're looking for
// OUTPUT: ONE object (or undefined)

const apple = products.find(item => item.name === "Apple");
// { name: "Apple", price: 1.50 }


// RECIPE 4: Add up numbers
// ------------------------
// INPUT:  Array of numbers
// OUTPUT: One number (the total)

const nums = [5, 10, 15];
const total2 = nums.reduce((sum, n) => sum + n, 0);
// 30


// RECIPE 5: Add up a property from objects
// ----------------------------------------
// INPUT:  Array of objects with numbers
// OUTPUT: One number (the total)

const totalPrice = products.reduce((sum, item) => sum + item.price, 0);
// 2.25


// RECIPE 6: Count how many of each thing
// --------------------------------------
// INPUT:  Array with repeating items
// OUTPUT: Object showing counts

const letters = ["a", "b", "a", "c", "a", "b"];

const counts = letters.reduce((count, letter) => {
  count[letter] = (count[letter] || 0) + 1;
  return count;
}, {});
// { a: 3, b: 2, c: 1 }


// RECIPE 7: Remove duplicates
// ---------------------------
// INPUT:  Array with duplicates
// OUTPUT: Array with only unique items

const duplicates = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(duplicates)];
// [1, 2, 3]


// RECIPE 8: Sort numbers
// ----------------------
// INPUT:  Unsorted array
// OUTPUT: Sorted array

const unsorted = [3, 1, 4, 1, 5];

// Small to big:
const ascending = [...unsorted].sort((a, b) => a - b);
// [1, 1, 3, 4, 5]

// Big to small:
const descending = [...unsorted].sort((a, b) => b - a);
// [5, 4, 3, 1, 1]


// RECIPE 9: Sort objects by a property
// ------------------------------------
// INPUT:  Array of objects
// OUTPUT: Sorted array of objects

const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
// Sorted cheapest first


// RECIPE 10: Check if ANY item matches
// ------------------------------------
// INPUT:  Array + condition
// OUTPUT: true or false

const hasExpensive = products.some(item => item.price > 1);
// true

// RECIPE 11: Check if ALL items match
// -----------------------------------
const allExpensive = products.every(item => item.price > 1);
// false


// RECIPE 12: Transform object keys/values
// ---------------------------------------
// INPUT:  Object
// OUTPUT: Array (or new object)

const car = { make: "Toyota", model: "Camry" };

Object.keys(car);     // ["make", "model"]
Object.values(car);   // ["Toyota", "Camry"]
Object.entries(car);  // [["make", "Toyota"], ["model", "Camry"]]


// =============================================
// PART 4: THE TEST PATTERN
// =============================================

/*
 * Almost every question follows this pattern:
 *
 * 1. They give you INPUT (an array or object)
 * 2. They want OUTPUT (transformed somehow)
 * 3. You figure out WHICH method to use
 *
 * ASK YOURSELF:
 *
 * "Do I need to CHANGE every item?"          → use map
 * "Do I need to KEEP only some items?"       → use filter
 * "Do I need to FIND one specific item?"     → use find
 * "Do I need ONE VALUE from many?"           → use reduce
 * "Do I need to just DO something?"          → use forEach
 */


// EXAMPLE QUESTION:
// "Given an array of users, return an array of just the active usernames"

const allUsers = [
  { username: "alice", active: true },
  { username: "bob", active: false },
  { username: "charlie", active: true }
];

// Step 1: Keep only active users (FILTER)
// Step 2: Get just the usernames (MAP)

const activeUsernames = allUsers
  .filter(user => user.active)      // Keep active only
  .map(user => user.username);      // Get just usernames

console.log(activeUsernames);  // ["alice", "charlie"]


// =============================================
// PART 5: QUICK PRACTICE (Try these!)
// =============================================

// PRACTICE 1: Double all numbers
// Input: [1, 2, 3, 4, 5]
// Output: [2, 4, 6, 8, 10]

function doubleAll(numbers) {
  return numbers.map(n => n * 2);
}

console.log("Practice 1:", doubleAll([1, 2, 3, 4, 5]));


// PRACTICE 2: Get only even numbers
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function getEvens(numbers) {
  return numbers.filter(n => n % 2 === 0);
}

console.log("Practice 2:", getEvens([1, 2, 3, 4, 5, 6]));


// PRACTICE 3: Find user by name
// Input: users array, "Bob"
// Output: { name: "Bob", ... }

function findByName(users, name) {
  return users.find(user => user.name === name);
}

console.log("Practice 3:", findByName(people, "Bob"));


// PRACTICE 4: Calculate total price
// Input: [{ price: 10 }, { price: 20 }, { price: 30 }]
// Output: 60

function getTotalPrice(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

console.log("Practice 4:", getTotalPrice([
  { price: 10 },
  { price: 20 },
  { price: 30 }
]));


// PRACTICE 5: Get names of people over 25
// Input: [{ name: "A", age: 20 }, { name: "B", age: 30 }]
// Output: ["B"]

function getNamesOver25(people) {
  return people
    .filter(person => person.age > 25)
    .map(person => person.name);
}

console.log("Practice 5:", getNamesOver25([
  { name: "Young", age: 20 },
  { name: "Old", age: 30 }
]));


// =============================================
// CHEAT SHEET (Screenshot this!)
// =============================================

/*

┌─────────────────────────────────────────────────────────┐
│                  JAVASCRIPT CHEAT SHEET                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CHANGE EVERY ITEM:                                     │
│  array.map(item => DO SOMETHING)                        │
│  [1,2,3].map(n => n * 2)  →  [2,4,6]                   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  KEEP SOME ITEMS:                                       │
│  array.filter(item => TRUE OR FALSE)                    │
│  [1,2,3,4].filter(n => n > 2)  →  [3,4]                │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  FIND ONE ITEM:                                         │
│  array.find(item => TRUE OR FALSE)                      │
│  [{id:1},{id:2}].find(x => x.id === 2)  →  {id:2}      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ADD UP / COMBINE:                                      │
│  array.reduce((total, item) => total + item, 0)         │
│  [1,2,3].reduce((t,n) => t+n, 0)  →  6                 │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  GET OBJECT PARTS:                                      │
│  Object.keys(obj)    → ["key1", "key2"]                │
│  Object.values(obj)  → ["val1", "val2"]                │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  REMOVE DUPLICATES:                                     │
│  [...new Set(array)]                                    │
│  [...new Set([1,1,2,2,3])]  →  [1,2,3]                 │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  SORT NUMBERS:                                          │
│  array.sort((a,b) => a - b)  ← small to big            │
│  array.sort((a,b) => b - a)  ← big to small            │
│                                                         │
└─────────────────────────────────────────────────────────┘

THE GOLDEN RULE:
- map    = same length, different values
- filter = shorter length, same values
- find   = one item
- reduce = one value

*/

console.log("\n✓ You've got this! Go get that job!\n");
