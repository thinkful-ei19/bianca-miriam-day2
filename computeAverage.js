/* Compute the average
Write a function called average that takes an array of numbers as its input and returns the average 
generated from the array of numbers. Recall that to compute the average of a set of numbers, you add 
together all of the numbers, and then divide the resulting value by the number of items in the array. 

Redo "Compute the average" exercise but use the Array.forEach() method instead of a for loop. */

  function average(numbers) {
    let sum = 0;
    numbers.forEach(n => sum += n);
    sum = sum/numbers.length;
    return sum; 
    }

// function average(numbers) {
//     result = numbers.forEach(average);    
//     return result; 
//   }


  /* From here down, you are not expected to 
     understand.... for now :)  
     
     
     Nothing to see here!
     
  */
  
  // tests
  
  function testFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
      console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
      return true;
    } else {
      console.log(
        'FAILURE: `' +
          fn.name +
          '([' +
          input +
          '])` should be ' +
          expected +
          ' but was ' +
          fn(input)
      );
      return false;
    }
  }
  
  (function runTests() {
    const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const correctAns1 = 5.5;
    const numList2 = [0, -1, 1];
    const correctAns2 = 0;
  
    const testResults = [
      testFunctionWorks(average, numList1, correctAns1),
      testFunctionWorks(average, numList2, correctAns2),
    ];
    const numPassing = testResults.filter(function(result) {
      return result;
    }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
  })();
  