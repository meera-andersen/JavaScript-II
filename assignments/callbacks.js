// Create a higher order function and invoke the callback function to test your work. 
// You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

const length = function(array){
  return array.length;
}
function getLength(array, cb) {
  return cb(array);
}
console.log(getLength(items, length));



// last passes the last item of the array into the callback.
const lastItem = function(array){
  return array.pop();
}
function last(array, cb) {
  return cb(array);
}
console.log(last(items, lastItem));



// sumNums adds two numbers (x, y) and passes the result to the callback.
const add = function(x, y){
  return x + y;
}
function sumNums(x, y, cb) {
  return cb(x, y);
}
console.log(sumNums(2, 8, add));





// multiplyNums multiplies two numbers and passes the result to the callback.
const multiply = function(x, y){
  return x * y;
}
function multiplyNums(x, y, cb) {
  return cb(x, y);
}
console.log(multiplyNums(3, 3, multiply));


//const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
// contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
const includesItem = function(item, list){
  if (list.includes(item)) {
    return true;
  } else {
    return false;
  }
}
  function contains(item, list, cb) {
  return cb(item, list);
}

console.log(contains("Pencil", items, includesItem));






/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
