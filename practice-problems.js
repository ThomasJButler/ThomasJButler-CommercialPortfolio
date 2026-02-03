/**
 * ============================================
 * PRACTICE PROBLEMS - TECH ASSESSMENT STYLE
 * ============================================
 *
 * These problems are similar to what you might encounter
 * in a technical assessment. Each has:
 * - A clear input/output description
 * - Example test cases
 * - A solution you can reveal after attempting
 *
 * TIP: Try solving each problem yourself first,
 * then check the solution!
 */


// ============================================
// PROBLEM 1: Two Sum
// ============================================
/**
 * Given an array of numbers and a target sum, return the indices
 * of two numbers that add up to the target.
 *
 * @param {number[]} nums - Array of numbers
 * @param {number} target - Target sum
 * @returns {number[]} - Indices of the two numbers
 *
 * Example:
 *   twoSum([2, 7, 11, 15], 9) => [0, 1]  (because 2 + 7 = 9)
 *   twoSum([3, 2, 4], 6) => [1, 2]  (because 2 + 4 = 6)
 */
function twoSum(nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in seen) {
      return [seen[complement], i];
    }
    seen[nums[i]] = i;
  }

  return [];
}

// Test
console.log("Problem 1 - Two Sum:");
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]
console.log("");


// ============================================
// PROBLEM 2: Valid Anagram
// ============================================
/**
 * Given two strings, determine if they are anagrams of each other.
 * (Same letters, different order)
 *
 * @param {string} s - First string
 * @param {string} t - Second string
 * @returns {boolean}
 *
 * Example:
 *   isAnagram("anagram", "nagaram") => true
 *   isAnagram("rat", "car") => false
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// Test
console.log("Problem 2 - Valid Anagram:");
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
console.log("");


// ============================================
// PROBLEM 3: FizzBuzz
// ============================================
/**
 * Return an array of strings from 1 to n where:
 * - Multiples of 3 are "Fizz"
 * - Multiples of 5 are "Buzz"
 * - Multiples of both are "FizzBuzz"
 * - Other numbers are the number as a string
 *
 * @param {number} n - Upper limit
 * @returns {string[]}
 *
 * Example:
 *   fizzBuzz(5) => ["1", "2", "Fizz", "4", "Buzz"]
 */
function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
}

// Test
console.log("Problem 3 - FizzBuzz:");
console.log(fizzBuzz(15));
console.log("");


// ============================================
// PROBLEM 4: Palindrome Check
// ============================================
/**
 * Check if a string is a palindrome (reads same forwards and backwards).
 * Ignore non-alphanumeric characters and case.
 *
 * @param {string} s - Input string
 * @returns {boolean}
 *
 * Example:
 *   isPalindrome("A man, a plan, a canal: Panama") => true
 *   isPalindrome("race a car") => false
 */
function isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// Test
console.log("Problem 4 - Palindrome:");
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                      // false
console.log("");


// ============================================
// PROBLEM 5: Merge Sorted Arrays
// ============================================
/**
 * Merge two sorted arrays into one sorted array.
 *
 * @param {number[]} arr1 - First sorted array
 * @param {number[]} arr2 - Second sorted array
 * @returns {number[]} - Merged sorted array
 *
 * Example:
 *   mergeSorted([1, 3, 5], [2, 4, 6]) => [1, 2, 3, 4, 5, 6]
 */
function mergeSorted(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Test
console.log("Problem 5 - Merge Sorted Arrays:");
console.log(mergeSorted([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log("");


// ============================================
// PROBLEM 6: Find Missing Number
// ============================================
/**
 * Given an array containing n distinct numbers from 0 to n,
 * find the one missing number.
 *
 * @param {number[]} nums - Array with one missing number
 * @returns {number} - The missing number
 *
 * Example:
 *   missingNumber([3, 0, 1]) => 2
 *   missingNumber([9,6,4,2,3,5,7,0,1]) => 8
 */
function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Test
console.log("Problem 6 - Missing Number:");
console.log(missingNumber([3, 0, 1]));              // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log("");


// ============================================
// PROBLEM 7: Reverse Words in String
// ============================================
/**
 * Reverse the order of words in a string.
 *
 * @param {string} s - Input string
 * @returns {string} - String with words reversed
 *
 * Example:
 *   reverseWords("the sky is blue") => "blue is sky the"
 *   reverseWords("  hello world  ") => "world hello"
 */
function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}

// Test
console.log("Problem 7 - Reverse Words:");
console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log("");


// ============================================
// PROBLEM 8: Maximum Profit
// ============================================
/**
 * Given an array of stock prices (by day), find the maximum profit
 * from buying and selling once. You must buy before selling.
 *
 * @param {number[]} prices - Array of prices
 * @returns {number} - Maximum profit (0 if no profit possible)
 *
 * Example:
 *   maxProfit([7,1,5,3,6,4]) => 5 (buy at 1, sell at 6)
 *   maxProfit([7,6,4,3,1]) => 0 (no profit possible)
 */
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}

// Test
console.log("Problem 8 - Maximum Profit:");
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1]));    // 0
console.log("");


// ============================================
// PROBLEM 9: Array Intersection
// ============================================
/**
 * Find all elements that appear in both arrays.
 * Each element should appear as many times as it shows in both.
 *
 * @param {number[]} nums1 - First array
 * @param {number[]} nums2 - Second array
 * @returns {number[]} - Intersection array
 *
 * Example:
 *   intersect([1,2,2,1], [2,2]) => [2,2]
 *   intersect([4,9,5], [9,4,9,8,4]) => [4,9] or [9,4]
 */
function intersect(nums1, nums2) {
  const count = {};
  const result = [];

  for (const num of nums1) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const num of nums2) {
    if (count[num] > 0) {
      result.push(num);
      count[num]--;
    }
  }

  return result;
}

// Test
console.log("Problem 9 - Array Intersection:");
console.log(intersect([1, 2, 2, 1], [2, 2]));       // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9] or [9, 4]
console.log("");


// ============================================
// PROBLEM 10: Rotate Array
// ============================================
/**
 * Rotate an array to the right by k steps.
 *
 * @param {number[]} nums - Array to rotate
 * @param {number} k - Steps to rotate
 * @returns {number[]} - Rotated array
 *
 * Example:
 *   rotate([1,2,3,4,5,6,7], 3) => [5,6,7,1,2,3,4]
 */
function rotate(nums, k) {
  k = k % nums.length;  // Handle k > length
  return [...nums.slice(-k), ...nums.slice(0, -k)];
}

// Test
console.log("Problem 10 - Rotate Array:");
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log("");


// ============================================
// PROBLEM 11: Valid Parentheses
// ============================================
/**
 * Check if a string of brackets is valid.
 * Valid means every opening bracket has a matching closing bracket
 * in the correct order.
 *
 * @param {string} s - String of brackets
 * @returns {boolean}
 *
 * Example:
 *   isValid("()[]{}") => true
 *   isValid("([)]") => false
 *   isValid("{[]}") => true
 */
function isValid(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const char of s) {
    if (char in pairs) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Test
console.log("Problem 11 - Valid Parentheses:");
console.log(isValid("()[]{}")); // true
console.log(isValid("([)]"));   // false
console.log(isValid("{[]}"));   // true
console.log("");


// ============================================
// PROBLEM 12: Move Zeroes
// ============================================
/**
 * Move all zeroes to the end while maintaining order of other elements.
 *
 * @param {number[]} nums - Array with zeroes
 * @returns {number[]} - Array with zeroes moved to end
 *
 * Example:
 *   moveZeroes([0,1,0,3,12]) => [1,3,12,0,0]
 */
function moveZeroes(nums) {
  const nonZeroes = nums.filter(n => n !== 0);
  const zeroes = nums.filter(n => n === 0);
  return [...nonZeroes, ...zeroes];
}

// Test
console.log("Problem 12 - Move Zeroes:");
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log("");


// ============================================
// PROBLEM 13: Contains Duplicate
// ============================================
/**
 * Check if array contains any duplicates.
 *
 * @param {number[]} nums - Array to check
 * @returns {boolean}
 *
 * Example:
 *   containsDuplicate([1,2,3,1]) => true
 *   containsDuplicate([1,2,3,4]) => false
 */
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

// Test
console.log("Problem 13 - Contains Duplicate:");
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log("");


// ============================================
// PROBLEM 14: Single Number
// ============================================
/**
 * Every element appears twice except one. Find that single one.
 *
 * @param {number[]} nums - Array where all but one appear twice
 * @returns {number} - The single number
 *
 * Example:
 *   singleNumber([2,2,1]) => 1
 *   singleNumber([4,1,2,1,2]) => 4
 */
function singleNumber(nums) {
  // Using XOR: a ^ a = 0, a ^ 0 = a
  return nums.reduce((result, num) => result ^ num, 0);
}

// Alternative using counting:
function singleNumberAlt(nums) {
  const count = {};
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }
  return Number(Object.entries(count).find(([_, v]) => v === 1)[0]);
}

// Test
console.log("Problem 14 - Single Number:");
console.log(singleNumber([2, 2, 1]));       // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log("");


// ============================================
// PROBLEM 15: Longest Common Prefix
// ============================================
/**
 * Find the longest common prefix string amongst an array of strings.
 *
 * @param {string[]} strs - Array of strings
 * @returns {string} - Longest common prefix
 *
 * Example:
 *   longestCommonPrefix(["flower","flow","flight"]) => "fl"
 *   longestCommonPrefix(["dog","racecar","car"]) => ""
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

// Test
console.log("Problem 15 - Longest Common Prefix:");
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
console.log("");


// ============================================
// PROBLEM 16: Count and Say
// ============================================
/**
 * Generate the nth term of "count and say" sequence.
 * 1 -> "1"
 * 2 -> "11" (one 1)
 * 3 -> "21" (two 1s)
 * 4 -> "1211" (one 2, one 1)
 *
 * @param {number} n - Which term to generate
 * @returns {string}
 */
function countAndSay(n) {
  if (n === 1) return "1";

  const prev = countAndSay(n - 1);
  let result = "";
  let count = 1;

  for (let i = 0; i < prev.length; i++) {
    if (prev[i] === prev[i + 1]) {
      count++;
    } else {
      result += count + prev[i];
      count = 1;
    }
  }

  return result;
}

// Test
console.log("Problem 16 - Count and Say:");
console.log(countAndSay(1)); // "1"
console.log(countAndSay(4)); // "1211"
console.log(countAndSay(5)); // "111221"
console.log("");


// ============================================
// PROBLEM 17: Roman to Integer
// ============================================
/**
 * Convert a Roman numeral to an integer.
 *
 * @param {string} s - Roman numeral string
 * @returns {number}
 *
 * Example:
 *   romanToInt("III") => 3
 *   romanToInt("LVIII") => 58
 *   romanToInt("MCMXCIV") => 1994
 */
function romanToInt(s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = values[s[i]];
    const next = values[s[i + 1]];

    if (next > current) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

// Test
console.log("Problem 17 - Roman to Integer:");
console.log(romanToInt("III"));     // 3
console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXCIV")); // 1994
console.log("");


// ============================================
// PROBLEM 18: First Unique Character
// ============================================
/**
 * Find the first non-repeating character in a string.
 * Return its index, or -1 if none exists.
 *
 * @param {string} s - Input string
 * @returns {number} - Index of first unique character
 *
 * Example:
 *   firstUniqChar("leetcode") => 0
 *   firstUniqChar("loveleetcode") => 2
 *   firstUniqChar("aabb") => -1
 */
function firstUniqChar(s) {
  const count = {};

  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

// Test
console.log("Problem 18 - First Unique Character:");
console.log(firstUniqChar("leetcode"));     // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb"));         // -1
console.log("");


// ============================================
// PROBLEM 19: Climbing Stairs
// ============================================
/**
 * You can climb 1 or 2 steps at a time.
 * How many distinct ways can you climb n steps?
 *
 * @param {number} n - Number of steps
 * @returns {number} - Number of ways
 *
 * Example:
 *   climbStairs(2) => 2 (1+1 or 2)
 *   climbStairs(3) => 3 (1+1+1, 1+2, 2+1)
 */
function climbStairs(n) {
  if (n <= 2) return n;

  let prev1 = 2;
  let prev2 = 1;

  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

// Test
console.log("Problem 19 - Climbing Stairs:");
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
console.log("");


// ============================================
// PROBLEM 20: Product of Array Except Self
// ============================================
/**
 * Return an array where each element is the product of all
 * other elements in the original array.
 * Do not use division.
 *
 * @param {number[]} nums - Input array
 * @returns {number[]} - Product array
 *
 * Example:
 *   productExceptSelf([1,2,3,4]) => [24,12,8,6]
 */
function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  // Left products
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Right products
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

// Test
console.log("Problem 20 - Product Except Self:");
console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log("");


// ============================================
// TIPS FOR YOUR ASSESSMENT
// ============================================

console.log(`
===========================================
TIPS FOR YOUR TECHNICAL ASSESSMENT
===========================================

1. READ THE PROBLEM CAREFULLY
   - Understand inputs and expected outputs
   - Look at the examples provided
   - Ask clarifying questions if needed

2. START WITH SIMPLE APPROACH
   - Don't try to optimize immediately
   - Get a working solution first
   - Then improve if time permits

3. TEST YOUR SOLUTION
   - Try the given examples
   - Think of edge cases (empty arrays, nulls, etc.)
   - What if all elements are the same?

4. COMMON PATTERNS TO REMEMBER:
   - Counting: use object as hashmap
   - Unique values: use Set
   - Transform arrays: map()
   - Filter arrays: filter()
   - Single value from array: reduce()
   - Find one element: find()
   - Check conditions: some(), every()

5. DON'T PANIC
   - Take your time
   - If stuck, try a different approach
   - Partial solutions are better than nothing

Good luck! You've got this!
`);
