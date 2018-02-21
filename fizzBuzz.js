// FizzBuzz

    function fizzBuzz(countTo) {
      // fizz for numbers divisible by 3 but not by 5
      // buzz for numbers divisible by 5 but not by 13
      // fizzbuzz for numbers divisible by both 3 and 5
      
      output = [];
      for (let i = 1; i <= countTo; i++) {
        if (i % 15 === 0) {
          output.push('fizzbuzz');
        } else if (i % 3 === 0)  {
          output.push('fizz');
        } else if (i % 5 === 0)  {
          output.push('buzz');
        } else                  {
          output.push(i);
        }
      }
      return output;
    }
      
      /* From here down, you are not expected to 
         understand.... for now :)  
         
         
         Nothing to see here!
         
      */
      
      // tests
      (function testFizzBuzz() {
        // we'll use the variables in our test cases
        const countTo = 16;
        const expected = [
          1,
          2,
          'fizz',
          4,
          'buzz',
          'fizz',
          7,
          8,
          'fizz',
          'buzz',
          11,
          'fizz',
          13,
          14,
          'fizzbuzz',
          16,
        ];
      
        const actual = fizzBuzz(countTo) || [];
      
        if (
          expected.length === actual.length &&
          expected.every(function(item, index) {
            return actual[index] === item;
          })
        ) {
          console.log('SUCCESS: fizzBuzz is working');
        } else {
          console.log('FAILURE: fizzBuzz is not working');
        }
      })();
      

