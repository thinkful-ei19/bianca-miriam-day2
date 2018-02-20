/* Adding array items
Write a function called addToList that accepts a list and an item as arguments, and returns the array with the item added to the end. This function will have the side effect of changing the original array. Usually, that's something to avoid, but it's fine here since we just want you to practice working with arrays. You'll learn more about side effects in the next lesson. */

function addToList(list, item) {
    list.push(item);
    return list;
  }
  
  /* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testAddToList() {
    const input1 = ['red', 'blue', 'green'];
    const input2 = 'pink';
    const expected = ['red', 'blue', 'green', 'pink'];
    const result = addToList(input1, input2);
  
    if (
      result &&
      result.length &&
      expected.length === result.length &&
      expected.every(function(item) {
        return result.indexOf(item) > -1;
      })
    ) {
      console.log('SUCCESS: `addToList` works!');
    } else {
      console.error('FAILURE: `addToList` is not working');
    }
  }
  
  testAddToList();
  