/**
 * ============================================
 * JAVASCRIPT BASICS - TECHNICAL TEST PREP
 * ============================================
 *
 * This guide covers the essential JavaScript concepts you'll need
 * for manipulating objects and arrays in technical assessments.
 *
 * Practice each section, then try the challenges at the end!
 */


// ============================================
// SECTION 1: VARIABLES & DATA TYPES
// ============================================

// Use 'const' for values that won't change
const PI = 3.14159;

// Use 'let' for values that will change
let counter = 0;
counter = counter + 1;

// Basic data types
const string = "Hello World";
const number = 42;
const decimal = 3.14;
const boolean = true;
const nullValue = null;
const undefinedValue = undefined;

// Arrays - ordered collections
const fruits = ["apple", "banana", "cherry"];

// Objects - key-value pairs
const person = {
  name: "Thomas",
  age: 30,
  isEmployed: true
};


// ============================================
// SECTION 2: ARRAY BASICS
// ============================================

const numbers = [1, 2, 3, 4, 5];

// Accessing elements (0-indexed)
console.log(numbers[0]);      // 1 (first element)
console.log(numbers[4]);      // 5 (last element)
console.log(numbers.length);  // 5

// Adding/removing elements
const arr = [1, 2, 3];
arr.push(4);        // Add to end: [1, 2, 3, 4]
arr.pop();          // Remove from end: [1, 2, 3]
arr.unshift(0);     // Add to beginning: [0, 1, 2, 3]
arr.shift();        // Remove from beginning: [1, 2, 3]

// Finding elements
const items = ["a", "b", "c", "b"];
items.indexOf("b");     // 1 (first occurrence)
items.lastIndexOf("b"); // 3 (last occurrence)
items.includes("c");    // true


// ============================================
// SECTION 3: ESSENTIAL ARRAY METHODS
// ============================================

// These are the MOST IMPORTANT methods for your test!

const nums = [1, 2, 3, 4, 5];

// ----- forEach: Loop through each element -----
// Use when: You need to DO something with each element
nums.forEach((num) => {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10 (but returns undefined)


// ----- map: Transform each element -----
// Use when: You need a NEW ARRAY with transformed values
const doubled = nums.map((num) => {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Shorthand (when it's a simple one-liner):
const tripled = nums.map(num => num * 3);
console.log(tripled); // [3, 6, 9, 12, 15]


// ----- filter: Keep elements that pass a test -----
// Use when: You need a NEW ARRAY with only SOME elements
const evens = nums.filter((num) => {
  return num % 2 === 0;  // Keep if even
});
console.log(evens); // [2, 4]

// Shorthand:
const odds = nums.filter(num => num % 2 !== 0);
console.log(odds); // [1, 3, 5]


// ----- find: Get the FIRST element that passes a test -----
// Use when: You need ONE element (not an array)
const firstEven = nums.find(num => num % 2 === 0);
console.log(firstEven); // 2

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const bob = users.find(user => user.name === "Bob");
console.log(bob); // { id: 2, name: "Bob" }


// ----- findIndex: Get the INDEX of first matching element -----
const bobIndex = users.findIndex(user => user.name === "Bob");
console.log(bobIndex); // 1


// ----- reduce: Combine all elements into ONE value -----
// Use when: You need to calculate a SINGLE result from array
const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);  // 0 is the starting value
console.log(sum); // 15

// Shorthand:
const product = nums.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120


// ----- some: Check if ANY element passes the test -----
const hasEven = nums.some(num => num % 2 === 0);
console.log(hasEven); // true


// ----- every: Check if ALL elements pass the test -----
const allPositive = nums.every(num => num > 0);
console.log(allPositive); // true


// ----- sort: Sort the array -----
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];

// For strings (default):
const words = ["banana", "apple", "cherry"];
words.sort();
console.log(words); // ["apple", "banana", "cherry"]

// For numbers (MUST provide compare function):
const sortedAsc = [...unsorted].sort((a, b) => a - b);
console.log(sortedAsc); // [1, 1, 2, 3, 4, 5, 6, 9]

const sortedDesc = [...unsorted].sort((a, b) => b - a);
console.log(sortedDesc); // [9, 6, 5, 4, 3, 2, 1, 1]


// ----- slice: Extract a portion (doesn't modify original) -----
const letters = ["a", "b", "c", "d", "e"];
const middle = letters.slice(1, 4);  // From index 1 to 4 (not including 4)
console.log(middle); // ["b", "c", "d"]


// ----- splice: Add/remove elements (MODIFIES original) -----
const colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow", "purple");  // At index 1, remove 1, add these
console.log(colors); // ["red", "yellow", "purple", "blue"]


// ----- concat: Combine arrays -----
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

// Or use spread operator:
const combined2 = [...arr1, ...arr2];
console.log(combined2); // [1, 2, 3, 4]


// ----- flat: Flatten nested arrays -----
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());   // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2));  // [1, 2, 3, 4, 5, 6]


// ----- join: Convert array to string -----
const parts = ["Hello", "World"];
console.log(parts.join(" ")); // "Hello World"
console.log(parts.join("-")); // "Hello-World"


// ----- reverse: Reverse the array -----
const forward = [1, 2, 3];
const backward = [...forward].reverse();
console.log(backward); // [3, 2, 1]


// ============================================
// SECTION 4: OBJECT BASICS
// ============================================

const user = {
  name: "Thomas",
  age: 30,
  email: "thomas@example.com",
  address: {
    city: "London",
    country: "UK"
  }
};

// Accessing properties
console.log(user.name);           // "Thomas" (dot notation)
console.log(user["age"]);         // 30 (bracket notation)
console.log(user.address.city);   // "London" (nested)

// Bracket notation is needed for:
const key = "email";
console.log(user[key]);           // "thomas@example.com"

// Adding/modifying properties
user.phone = "123-456-7890";      // Add new property
user.age = 31;                    // Modify existing

// Deleting properties
delete user.phone;

// Check if property exists
console.log("name" in user);               // true
console.log(user.hasOwnProperty("name"));  // true


// ============================================
// SECTION 5: ESSENTIAL OBJECT METHODS
// ============================================

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020
};

// ----- Object.keys: Get array of property names -----
const keys = Object.keys(car);
console.log(keys); // ["make", "model", "year"]


// ----- Object.values: Get array of values -----
const values = Object.values(car);
console.log(values); // ["Toyota", "Camry", 2020]


// ----- Object.entries: Get array of [key, value] pairs -----
const entries = Object.entries(car);
console.log(entries);
// [["make", "Toyota"], ["model", "Camry"], ["year", 2020]]


// ----- Object.fromEntries: Create object from entries -----
const newCar = Object.fromEntries([
  ["make", "Honda"],
  ["model", "Civic"]
]);
console.log(newCar); // { make: "Honda", model: "Civic" }


// ----- Object.assign: Merge objects -----
const defaults = { theme: "dark", language: "en" };
const userPrefs = { language: "es" };
const settings = Object.assign({}, defaults, userPrefs);
console.log(settings); // { theme: "dark", language: "es" }


// ----- Spread operator for objects -----
const merged = { ...defaults, ...userPrefs };
console.log(merged); // { theme: "dark", language: "es" }


// ============================================
// SECTION 6: DESTRUCTURING
// ============================================

// Array destructuring
const coords = [10, 20, 30];
const [x, y, z] = coords;
console.log(x, y, z); // 10 20 30

// Skip elements
const [first, , third] = coords;
console.log(first, third); // 10 30

// Object destructuring
const employee = { name: "Alice", role: "Developer", salary: 50000 };
const { name, role } = employee;
console.log(name, role); // "Alice" "Developer"

// Rename while destructuring
const { name: employeeName, salary: pay } = employee;
console.log(employeeName, pay); // "Alice" 50000

// Default values
const { name: n, bonus = 0 } = employee;
console.log(bonus); // 0 (default, since bonus doesn't exist)


// ============================================
// SECTION 7: STRING METHODS (Useful extras)
// ============================================

const str = "  Hello World  ";

str.trim();              // "Hello World" (remove whitespace)
str.toLowerCase();       // "  hello world  "
str.toUpperCase();       // "  HELLO WORLD  "
"Hello".split("");       // ["H", "e", "l", "l", "o"]
"a,b,c".split(",");      // ["a", "b", "c"]
"Hello".charAt(0);       // "H"
"Hello".substring(1, 3); // "el"
"Hello".includes("ell"); // true
"Hello".startsWith("He"); // true
"Hello".endsWith("lo");   // true
"Hello".replace("l", "L"); // "HeLlo" (first occurrence)
"Hello".replaceAll("l", "L"); // "HeLLo" (all occurrences)
"ha".repeat(3);          // "hahaha"


// ============================================
// SECTION 8: COMMON PATTERNS
// ============================================

// ----- Pattern 1: Transform array of objects -----
const products = [
  { name: "Apple", price: 1.50 },
  { name: "Banana", price: 0.75 },
  { name: "Cherry", price: 2.00 }
];

// Get just the names
const productNames = products.map(p => p.name);
console.log(productNames); // ["Apple", "Banana", "Cherry"]

// Get products over $1
const expensive = products.filter(p => p.price > 1);
console.log(expensive); // [{ name: "Apple", ... }, { name: "Cherry", ... }]


// ----- Pattern 2: Group items by property -----
const people = [
  { name: "Alice", department: "Engineering" },
  { name: "Bob", department: "Marketing" },
  { name: "Charlie", department: "Engineering" }
];

const byDepartment = people.reduce((groups, person) => {
  const dept = person.department;
  if (!groups[dept]) {
    groups[dept] = [];
  }
  groups[dept].push(person);
  return groups;
}, {});

console.log(byDepartment);
// {
//   Engineering: [{ name: "Alice", ... }, { name: "Charlie", ... }],
//   Marketing: [{ name: "Bob", ... }]
// }


// ----- Pattern 3: Count occurrences -----
const fruits2 = ["apple", "banana", "apple", "cherry", "banana", "apple"];

const fruitCount = fruits2.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});

console.log(fruitCount); // { apple: 3, banana: 2, cherry: 1 }


// ----- Pattern 4: Find min/max in array of objects -----
const scores = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 }
];

const highest = scores.reduce((max, current) =>
  current.score > max.score ? current : max
);
console.log(highest); // { name: "Bob", score: 92 }


// ----- Pattern 5: Remove duplicates -----
const duplicates = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(duplicates)];
console.log(unique); // [1, 2, 3, 4]


// ----- Pattern 6: Flatten and process -----
const orders = [
  { items: ["apple", "banana"] },
  { items: ["cherry", "date"] }
];

const allItems = orders.flatMap(order => order.items);
console.log(allItems); // ["apple", "banana", "cherry", "date"]


// ============================================
// SECTION 9: PRACTICE CHALLENGES
// ============================================

/**
 * CHALLENGE 1: Sum of Even Numbers
 * Given an array of numbers, return the sum of all even numbers.
 *
 * Example: [1, 2, 3, 4, 5, 6] => 12 (2 + 4 + 6)
 */
function sumOfEvens(numbers) {
  // Your solution here
  return numbers.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);
}

console.log("Challenge 1:", sumOfEvens([1, 2, 3, 4, 5, 6])); // 12


/**
 * CHALLENGE 2: Get Full Names
 * Given an array of objects with firstName and lastName,
 * return an array of full names.
 *
 * Example: [{firstName: "John", lastName: "Doe"}] => ["John Doe"]
 */
function getFullNames(people) {
  // Your solution here
  return people.map(p => `${p.firstName} ${p.lastName}`);
}

console.log("Challenge 2:", getFullNames([
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
])); // ["John Doe", "Jane Smith"]


/**
 * CHALLENGE 3: Find User by ID
 * Given an array of user objects and an ID, return the user with that ID.
 * Return undefined if not found.
 *
 * Example: users = [{id: 1, name: "Alice"}], id = 1 => {id: 1, name: "Alice"}
 */
function findUserById(users, id) {
  // Your solution here
  return users.find(user => user.id === id);
}

console.log("Challenge 3:", findUserById([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
], 2)); // { id: 2, name: "Bob" }


/**
 * CHALLENGE 4: Calculate Average
 * Given an array of numbers, return the average.
 *
 * Example: [10, 20, 30] => 20
 */
function calculateAverage(numbers) {
  // Your solution here
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

console.log("Challenge 4:", calculateAverage([10, 20, 30])); // 20


/**
 * CHALLENGE 5: Group by Property
 * Given an array of objects and a property name,
 * group the objects by that property.
 *
 * Example: [{type: "fruit", name: "apple"}, {type: "veg", name: "carrot"}], "type"
 *          => {fruit: [{...}], veg: [{...}]}
 */
function groupBy(items, property) {
  // Your solution here
  return items.reduce((groups, item) => {
    const key = item[property];
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}

console.log("Challenge 5:", groupBy([
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" }
], "type"));


/**
 * CHALLENGE 6: Transform Object Keys
 * Given an object, return a new object with all keys in uppercase.
 *
 * Example: {name: "Alice", age: 30} => {NAME: "Alice", AGE: 30}
 */
function uppercaseKeys(obj) {
  // Your solution here
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key.toUpperCase(), value])
  );
}

console.log("Challenge 6:", uppercaseKeys({ name: "Alice", age: 30 }));
// { NAME: "Alice", AGE: 30 }


/**
 * CHALLENGE 7: Most Frequent Element
 * Given an array, return the element that appears most frequently.
 *
 * Example: [1, 2, 2, 3, 3, 3] => 3
 */
function mostFrequent(arr) {
  // Your solution here
  const counts = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts).reduce((max, [item, count]) =>
    count > max.count ? { item, count } : max
  , { item: null, count: 0 }).item;
}

console.log("Challenge 7:", mostFrequent([1, 2, 2, 3, 3, 3])); // "3" (string due to Object.entries)


/**
 * CHALLENGE 8: Flatten Nested Object Values
 * Given a nested object, extract all primitive values into an array.
 *
 * Example: {a: 1, b: {c: 2, d: {e: 3}}} => [1, 2, 3]
 */
function flattenValues(obj) {
  // Your solution here
  const values = [];

  function extract(o) {
    for (const value of Object.values(o)) {
      if (typeof value === "object" && value !== null) {
        extract(value);
      } else {
        values.push(value);
      }
    }
  }

  extract(obj);
  return values;
}

console.log("Challenge 8:", flattenValues({ a: 1, b: { c: 2, d: { e: 3 } } }));
// [1, 2, 3]


/**
 * CHALLENGE 9: Sort by Multiple Properties
 * Sort an array of objects by age (ascending), then by name (alphabetically).
 *
 * Example: [{name: "Bob", age: 25}, {name: "Alice", age: 25}]
 *          => [{name: "Alice", age: 25}, {name: "Bob", age: 25}]
 */
function sortByAgeAndName(people) {
  // Your solution here
  return [...people].sort((a, b) => {
    if (a.age !== b.age) {
      return a.age - b.age;
    }
    return a.name.localeCompare(b.name);
  });
}

console.log("Challenge 9:", sortByAgeAndName([
  { name: "Charlie", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 25 }
]));


/**
 * CHALLENGE 10: Merge and Deduplicate
 * Given two arrays, merge them and remove duplicates.
 *
 * Example: [1, 2, 3], [2, 3, 4] => [1, 2, 3, 4]
 */
function mergeAndDedupe(arr1, arr2) {
  // Your solution here
  return [...new Set([...arr1, ...arr2])];
}

console.log("Challenge 10:", mergeAndDedupe([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]


// ============================================
// QUICK REFERENCE CHEAT SHEET
// ============================================

/**
 * ARRAY METHODS AT A GLANCE:
 *
 * TRANSFORM:
 *   map(fn)        - Transform each element, returns new array
 *   flatMap(fn)    - Map + flatten one level
 *
 * FILTER:
 *   filter(fn)     - Keep elements that pass test
 *   find(fn)       - Get first element that passes test
 *   findIndex(fn)  - Get index of first matching element
 *
 * TEST:
 *   some(fn)       - True if ANY element passes
 *   every(fn)      - True if ALL elements pass
 *   includes(val)  - True if value exists
 *
 * REDUCE:
 *   reduce(fn, initial) - Combine into single value
 *
 * SORT/ORDER:
 *   sort(fn)       - Sort in place
 *   reverse()      - Reverse in place
 *
 * ADD/REMOVE:
 *   push(val)      - Add to end
 *   pop()          - Remove from end
 *   unshift(val)   - Add to beginning
 *   shift()        - Remove from beginning
 *   splice(i,n,...)- Add/remove at index
 *
 * EXTRACT:
 *   slice(i, j)    - Get portion (non-destructive)
 *   concat(arr)    - Combine arrays
 *   join(sep)      - Convert to string
 *
 *
 * OBJECT METHODS AT A GLANCE:
 *
 *   Object.keys(obj)       - Array of keys
 *   Object.values(obj)     - Array of values
 *   Object.entries(obj)    - Array of [key, value] pairs
 *   Object.fromEntries(arr)- Create object from pairs
 *   Object.assign(t, ...s) - Merge objects
 *   { ...obj1, ...obj2 }   - Spread merge
 */


console.log("\n=== All challenges completed! ===");
console.log("Review any you found difficult and practice variations.");
console.log("Good luck with your technical assessment!");
