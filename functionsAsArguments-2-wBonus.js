/* Functions as arguments (2)

Let's write our own version of the filter function which is used to create a new array from an 
old array, but only including elements that meet criteria set in the callback function. The usage 
is below; we recommend you paste this code into your code editor and write your function in the 
space indicated:

/* 
• Create a function called filter, which takes two arguments:
  - First argument is an array: arr
  - Second argument is a function: fn
• This function exists to return a new array, so create a newArray initialized to [];
• Now start a loop through the arr passed in
• Inside the loop:
  - Write an if statement that checks if invoking the fn function while passing in the current 
    element of arr returns true
  - If it does, then push the current element of arr into our newArray
• Finally, outside the loop, we return newArray
• Try calling your filter function using the myNames array above and test that it works

Bonus credit! Can you invoke the filter function and immediately log the result using a single 
   line of code and arrow functions? */

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R' */



const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:

// **** FOR LOOP FILTER FUNCTION ****
//
// function filter(arr, fn) {
//     let newArray = [];
//     for(let i = 0; i < arr.length; i++){
//         console.log(`fn(arr[i]) = ${fn(arr[i])} and arr[i] = ${arr[i]}`)
//         if(fn(arr[i])){
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }

// **** BONUS CREDIT FILTER FUNCTION ****
//
function filter(arr,fn) {
    return arr.filter(name => fn(name));
}
