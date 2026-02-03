/**
 * =============================================
 * REAL-WORLD SCENARIOS
 * =============================================
 *
 * These are the types of problems you'll actually see.
 * They use realistic data like you'd find in a real app.
 *
 * Each one has:
 * - The scenario (what they'd ask)
 * - The input data
 * - What you need to return
 * - The solution
 */


// =============================================
// SCENARIO 1: E-COMMERCE - Cart Total
// =============================================
/*
 * "Calculate the total price of items in a shopping cart"
 */

const cart = [
  { name: "T-Shirt", price: 19.99, quantity: 2 },
  { name: "Jeans", price: 49.99, quantity: 1 },
  { name: "Socks", price: 5.99, quantity: 3 }
];

function getCartTotal(items) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}

console.log("Scenario 1 - Cart Total:");
console.log(getCartTotal(cart));  // 107.94
console.log("");


// =============================================
// SCENARIO 2: E-COMMERCE - Apply Discount
// =============================================
/*
 * "Apply a 20% discount to all items over £20"
 */

function applyDiscount(items, threshold, discountPercent) {
  return items.map(item => {
    if (item.price > threshold) {
      return {
        ...item,
        price: item.price * (1 - discountPercent / 100)
      };
    }
    return item;
  });
}

console.log("Scenario 2 - Apply Discount:");
console.log(applyDiscount(cart, 20, 20));
// T-Shirt stays same, Jeans becomes 39.99
console.log("");


// =============================================
// SCENARIO 3: USER DATA - Filter Active Users
// =============================================
/*
 * "Get all active users who have verified their email"
 */

const users = [
  { id: 1, name: "Alice", active: true, emailVerified: true },
  { id: 2, name: "Bob", active: true, emailVerified: false },
  { id: 3, name: "Charlie", active: false, emailVerified: true },
  { id: 4, name: "Diana", active: true, emailVerified: true }
];

function getActiveVerifiedUsers(users) {
  return users.filter(user => user.active && user.emailVerified);
}

console.log("Scenario 3 - Active Verified Users:");
console.log(getActiveVerifiedUsers(users));
// Alice and Diana
console.log("");


// =============================================
// SCENARIO 4: USER DATA - Get Usernames
// =============================================
/*
 * "Return an array of usernames for all active users"
 */

function getActiveUsernames(users) {
  return users
    .filter(user => user.active)
    .map(user => user.name);
}

console.log("Scenario 4 - Active Usernames:");
console.log(getActiveUsernames(users));  // ["Alice", "Bob", "Diana"]
console.log("");


// =============================================
// SCENARIO 5: ORDERS - Group by Status
// =============================================
/*
 * "Group orders by their status"
 */

const orders = [
  { id: 1, product: "Laptop", status: "shipped" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "shipped" },
  { id: 4, product: "Monitor", status: "delivered" },
  { id: 5, product: "Webcam", status: "pending" }
];

function groupByStatus(orders) {
  return orders.reduce((groups, order) => {
    const status = order.status;
    if (!groups[status]) {
      groups[status] = [];
    }
    groups[status].push(order);
    return groups;
  }, {});
}

console.log("Scenario 5 - Group by Status:");
console.log(groupByStatus(orders));
console.log("");


// =============================================
// SCENARIO 6: ORDERS - Count by Status
// =============================================
/*
 * "Count how many orders are in each status"
 */

function countByStatus(orders) {
  return orders.reduce((counts, order) => {
    counts[order.status] = (counts[order.status] || 0) + 1;
    return counts;
  }, {});
}

console.log("Scenario 6 - Count by Status:");
console.log(countByStatus(orders));
// { shipped: 2, pending: 2, delivered: 1 }
console.log("");


// =============================================
// SCENARIO 7: PRODUCTS - Search/Filter
// =============================================
/*
 * "Find all products that match a search term (case-insensitive)"
 */

const products = [
  { id: 1, name: "iPhone 14 Pro", category: "phones" },
  { id: 2, name: "Samsung Galaxy S23", category: "phones" },
  { id: 3, name: "MacBook Pro", category: "laptops" },
  { id: 4, name: "iPad Pro", category: "tablets" },
  { id: 5, name: "AirPods Pro", category: "accessories" }
];

function searchProducts(products, searchTerm) {
  const term = searchTerm.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(term)
  );
}

console.log("Scenario 7 - Search Products:");
console.log(searchProducts(products, "pro"));
// Returns all products with "pro" in the name
console.log("");


// =============================================
// SCENARIO 8: PRODUCTS - Get by Category
// =============================================
/*
 * "Get all unique categories from the product list"
 */

function getCategories(products) {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
}

console.log("Scenario 8 - Get Categories:");
console.log(getCategories(products));
// ["phones", "laptops", "tablets", "accessories"]
console.log("");


// =============================================
// SCENARIO 9: EMPLOYEES - Calculate Stats
// =============================================
/*
 * "Calculate average salary for a department"
 */

const employees = [
  { name: "Alice", department: "Engineering", salary: 80000 },
  { name: "Bob", department: "Marketing", salary: 60000 },
  { name: "Charlie", department: "Engineering", salary: 90000 },
  { name: "Diana", department: "Engineering", salary: 85000 },
  { name: "Eve", department: "Marketing", salary: 65000 }
];

function getAverageSalary(employees, department) {
  const deptEmployees = employees.filter(e => e.department === department);

  if (deptEmployees.length === 0) return 0;

  const total = deptEmployees.reduce((sum, e) => sum + e.salary, 0);
  return total / deptEmployees.length;
}

console.log("Scenario 9 - Average Salary:");
console.log("Engineering:", getAverageSalary(employees, "Engineering"));  // 85000
console.log("Marketing:", getAverageSalary(employees, "Marketing"));      // 62500
console.log("");


// =============================================
// SCENARIO 10: EMPLOYEES - Highest Paid
// =============================================
/*
 * "Find the highest paid employee in each department"
 */

function getHighestPaidByDept(employees) {
  // First, group by department
  const byDept = employees.reduce((groups, emp) => {
    if (!groups[emp.department]) {
      groups[emp.department] = [];
    }
    groups[emp.department].push(emp);
    return groups;
  }, {});

  // Then find highest in each
  const result = {};
  for (const dept in byDept) {
    result[dept] = byDept[dept].reduce((highest, emp) =>
      emp.salary > highest.salary ? emp : highest
    );
  }

  return result;
}

console.log("Scenario 10 - Highest Paid by Dept:");
console.log(getHighestPaidByDept(employees));
console.log("");


// =============================================
// SCENARIO 11: TRANSACTIONS - Sum by Type
// =============================================
/*
 * "Calculate total income and total expenses"
 */

const transactions = [
  { id: 1, type: "income", amount: 5000 },
  { id: 2, type: "expense", amount: 200 },
  { id: 3, type: "income", amount: 3000 },
  { id: 4, type: "expense", amount: 1500 },
  { id: 5, type: "expense", amount: 300 }
];

function getSummary(transactions) {
  return transactions.reduce((summary, t) => {
    if (t.type === "income") {
      summary.totalIncome += t.amount;
    } else {
      summary.totalExpenses += t.amount;
    }
    return summary;
  }, { totalIncome: 0, totalExpenses: 0 });
}

console.log("Scenario 11 - Transaction Summary:");
console.log(getSummary(transactions));
// { totalIncome: 8000, totalExpenses: 2000 }
console.log("");


// =============================================
// SCENARIO 12: API RESPONSE - Transform Data
// =============================================
/*
 * "Transform API response to simpler format"
 */

const apiResponse = {
  data: {
    users: [
      { user_id: 1, first_name: "Alice", last_name: "Smith", is_active: true },
      { user_id: 2, first_name: "Bob", last_name: "Jones", is_active: false },
      { user_id: 3, first_name: "Charlie", last_name: "Brown", is_active: true }
    ]
  }
};

function transformUsers(response) {
  return response.data.users.map(user => ({
    id: user.user_id,
    fullName: `${user.first_name} ${user.last_name}`,
    active: user.is_active
  }));
}

console.log("Scenario 12 - Transform API Response:");
console.log(transformUsers(apiResponse));
console.log("");


// =============================================
// SCENARIO 13: INVENTORY - Low Stock Alert
// =============================================
/*
 * "Find products with stock below threshold"
 */

const inventory = [
  { sku: "A001", name: "Widget", stock: 5 },
  { sku: "A002", name: "Gadget", stock: 50 },
  { sku: "A003", name: "Gizmo", stock: 2 },
  { sku: "A004", name: "Thingamajig", stock: 100 },
  { sku: "A005", name: "Doohickey", stock: 8 }
];

function getLowStock(inventory, threshold) {
  return inventory
    .filter(item => item.stock < threshold)
    .map(item => ({
      sku: item.sku,
      name: item.name,
      stock: item.stock,
      needToOrder: threshold - item.stock
    }));
}

console.log("Scenario 13 - Low Stock Alert:");
console.log(getLowStock(inventory, 10));
console.log("");


// =============================================
// SCENARIO 14: REVIEWS - Calculate Average Rating
// =============================================
/*
 * "Calculate average rating for a product"
 */

const reviews = [
  { productId: 1, rating: 5, comment: "Great!" },
  { productId: 1, rating: 4, comment: "Good" },
  { productId: 1, rating: 5, comment: "Excellent" },
  { productId: 2, rating: 3, comment: "OK" },
  { productId: 1, rating: 4, comment: "Nice" }
];

function getAverageRating(reviews, productId) {
  const productReviews = reviews.filter(r => r.productId === productId);

  if (productReviews.length === 0) return 0;

  const total = productReviews.reduce((sum, r) => sum + r.rating, 0);
  return (total / productReviews.length).toFixed(1);
}

console.log("Scenario 14 - Average Rating:");
console.log("Product 1:", getAverageRating(reviews, 1));  // 4.5
console.log("Product 2:", getAverageRating(reviews, 2));  // 3.0
console.log("");


// =============================================
// SCENARIO 15: EVENTS - Filter by Date Range
// =============================================
/*
 * "Get events within a date range"
 */

const events = [
  { id: 1, name: "Meeting", date: "2024-01-15" },
  { id: 2, name: "Conference", date: "2024-02-20" },
  { id: 3, name: "Workshop", date: "2024-01-25" },
  { id: 4, name: "Webinar", date: "2024-03-10" }
];

function getEventsInRange(events, startDate, endDate) {
  return events.filter(event => {
    const eventDate = new Date(event.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return eventDate >= start && eventDate <= end;
  });
}

console.log("Scenario 15 - Events in Range:");
console.log(getEventsInRange(events, "2024-01-01", "2024-01-31"));
// Meeting and Workshop
console.log("");


// =============================================
// SCENARIO 16: NESTED DATA - Flatten
// =============================================
/*
 * "Get all items from all categories"
 */

const catalog = [
  {
    category: "Electronics",
    items: ["Phone", "Laptop", "Tablet"]
  },
  {
    category: "Clothing",
    items: ["Shirt", "Pants", "Shoes"]
  },
  {
    category: "Books",
    items: ["Fiction", "Non-fiction"]
  }
];

function getAllItems(catalog) {
  return catalog.flatMap(cat => cat.items);
}

// Or without flatMap:
function getAllItems2(catalog) {
  return catalog.reduce((all, cat) => [...all, ...cat.items], []);
}

console.log("Scenario 16 - All Items:");
console.log(getAllItems(catalog));
// ["Phone", "Laptop", "Tablet", "Shirt", "Pants", "Shoes", "Fiction", "Non-fiction"]
console.log("");


// =============================================
// SCENARIO 17: FORM DATA - Validate
// =============================================
/*
 * "Check if all required fields are filled"
 */

const formData = {
  name: "Thomas",
  email: "thomas@example.com",
  phone: "",
  address: "123 Main St"
};

const requiredFields = ["name", "email", "phone"];

function validateForm(data, required) {
  const missing = required.filter(field => !data[field]);
  return {
    isValid: missing.length === 0,
    missingFields: missing
  };
}

console.log("Scenario 17 - Form Validation:");
console.log(validateForm(formData, requiredFields));
// { isValid: false, missingFields: ["phone"] }
console.log("");


// =============================================
// SCENARIO 18: LEADERBOARD - Sort and Rank
// =============================================
/*
 * "Create a sorted leaderboard with ranks"
 */

const players = [
  { name: "Alice", score: 850 },
  { name: "Bob", score: 920 },
  { name: "Charlie", score: 780 },
  { name: "Diana", score: 920 }
];

function createLeaderboard(players) {
  return [...players]
    .sort((a, b) => b.score - a.score)
    .map((player, index) => ({
      rank: index + 1,
      ...player
    }));
}

console.log("Scenario 18 - Leaderboard:");
console.log(createLeaderboard(players));
console.log("");


// =============================================
// SCENARIO 19: DATA MERGE - Combine Objects
// =============================================
/*
 * "Merge user profile with user settings"
 */

const profile = { id: 1, name: "Thomas", email: "t@example.com" };
const settings = { theme: "dark", notifications: true };

function mergeUserData(profile, settings) {
  return { ...profile, settings };
}

// Or flat merge:
function mergeFlat(profile, settings) {
  return { ...profile, ...settings };
}

console.log("Scenario 19 - Merge Objects:");
console.log(mergeUserData(profile, settings));
console.log("");


// =============================================
// SCENARIO 20: STRING MANIPULATION - Format Names
// =============================================
/*
 * "Convert names to 'Last, First' format"
 */

const names = ["john smith", "jane doe", "bob wilson"];

function formatNames(names) {
  return names.map(name => {
    const [first, last] = name.split(" ");
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    return `${capitalize(last)}, ${capitalize(first)}`;
  });
}

console.log("Scenario 20 - Format Names:");
console.log(formatNames(names));
// ["Smith, John", "Doe, Jane", "Wilson, Bob"]
console.log("");


console.log("=".repeat(50));
console.log("That's 20 real-world scenarios!");
console.log("Practice these patterns - they cover 95% of test questions.");
console.log("=".repeat(50));
