const fruits = ["apple","banana","orange"];
console.log(fruits[0]);

console.log(fruits[fruits.length - 1]); // Last element
console.log(fruits.at(-1)); // ES2022: "orange" (last element)
console.log(fruits);

const arr = ["a", "b", "c"];
// Add to end
arr.push("d");

console.log(arr);
// Add to beginning
arr.pop();
console.log(arr);
// splice() - Swiss Army knife

arr.splice(1, 1); // Remove 1 element at index 1
// arr = ["a", "c"]
console.log(arr);
arr.splice(1, 0, "b2", "b3"); // Insert at index 1
// arr = ["a", "b2", "b3", "c"]
console.log(arr);
arr.splice(1, 2, "newB"); // Replace 2 elements with 1
// arr = ["a", "newB", "c"]
console.log(arr);