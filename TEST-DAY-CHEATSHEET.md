# TEST DAY CHEATSHEET

Review this 5 minutes before your test. Keep it open for reference.

---

## THE BIG 4 METHODS

```javascript
// CHANGE every item → map
[1, 2, 3].map(x => x * 2)                    // [2, 4, 6]

// KEEP some items → filter
[1, 2, 3, 4].filter(x => x > 2)              // [3, 4]

// FIND one item → find
[{id:1}, {id:2}].find(x => x.id === 2)       // {id: 2}

// COMBINE into one → reduce
[1, 2, 3].reduce((sum, x) => sum + x, 0)     // 6
```

---

## MOST COMMON PATTERNS

### Get one property from each object
```javascript
users.map(user => user.name)
// [{name:"A"}, {name:"B"}] → ["A", "B"]
```

### Filter then get property
```javascript
users.filter(u => u.active).map(u => u.name)
```

### Sum up a property
```javascript
items.reduce((total, item) => total + item.price, 0)
```

### Count occurrences
```javascript
arr.reduce((count, item) => {
  count[item] = (count[item] || 0) + 1;
  return count;
}, {})
```

### Group by property
```javascript
arr.reduce((groups, item) => {
  const key = item.category;
  if (!groups[key]) groups[key] = [];
  groups[key].push(item);
  return groups;
}, {})
```

### Remove duplicates
```javascript
[...new Set(array)]
```

### Sort numbers
```javascript
arr.sort((a, b) => a - b)   // ascending
arr.sort((a, b) => b - a)   // descending
```

### Sort objects by property
```javascript
arr.sort((a, b) => a.price - b.price)
```

---

## OBJECT TRICKS

```javascript
Object.keys(obj)      // ["key1", "key2"]
Object.values(obj)    // ["val1", "val2"]
Object.entries(obj)   // [["key1","val1"], ["key2","val2"]]

// Merge objects
{ ...obj1, ...obj2 }

// Copy then modify
{ ...original, newProp: "value" }
```

---

## QUICK CHECKS

```javascript
// Does array contain value?
arr.includes(value)           // true/false

// Does ANY item match?
arr.some(x => x > 10)         // true/false

// Do ALL items match?
arr.every(x => x > 0)         // true/false

// Does property exist?
"name" in obj                 // true/false
```

---

## WATCH OUT FOR

| Trap | Fix |
|------|-----|
| Forgot `return` in `{}` | Use `x => x * 2` not `x => { x * 2 }` |
| Used `==` | Always use `===` |
| Sort without function | Use `.sort((a,b) => a-b)` for numbers |
| `find` returns undefined | Check with `if (result)` |
| Modified original array | Use `[...arr]` to copy first |

---

## IF YOU GET STUCK

1. **Read the problem again** - what's the INPUT? what's the OUTPUT?
2. **Ask yourself**: Am I changing, filtering, finding, or combining?
3. **Start simple** - get something working, then improve
4. **Check the examples** - make sure your output matches

---

## TEST APPROACH

```
1. Read the problem (1 min)
2. Look at examples (1 min)
3. Write solution (5-8 min)
4. Test with examples (1-2 min)
5. Edge cases if time permits
```

---

**You've got this. Trust your prep. Go get that job.**
