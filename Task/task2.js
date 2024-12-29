// Spread - expand elements
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

// Rest - collect elements
const sum = (...nums) => nums.reduce((total, num) => total + num, 0);
console.log(sum(1, 2, 3, 4)); // 10