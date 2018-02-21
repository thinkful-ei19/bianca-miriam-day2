// forEach, filter and map 
/* 
A turtle's movements can be represented by an array which looks like this: [3, 4]. The first 
item in the array represents the number of steps the turtle takes forwards. The second number in 
the array is the number of steps the turtle takes to the left. Here is an array of different 
movements made by a turtle:  [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]].

1. Use the filter method to remove any items where the turtle moves backwards or to the right 
    (i.e. where either the first of second number is an item is negative).
2. Use the map method to create a new array containing how many steps the turtle makes in total 
    with each movement (i.e. the first and second number added together). As is detailed below,
    this is underspecified and several alternative interpretations are put forth.
3. Use the forEach method to log out how many steps the turtle took in each case. */

let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]
console.log('Turtle movements in this case: ', movements);

// 1. Only consider movements made by the turtle that are left and forward
const onlyLeftForwardMoves = movements.filter(m => m[0] >= 0 && m[1] >= 0);
console.log('1. Only left and forward movements: ', onlyLeftForwardMoves);

// 2a. If specification is for filtered array in 1, then solution is:
const totalLeftForwardStepsPerMove = onlyLeftForwardMoves.map(m => m[0] + m[1]);
console.log('2a. Total steps each move only left and forward = ', totalLeftForwardStepsPerMove);

// 2b. If specification is for original array, get rectilinear distance using absolute values:
const totalStepsPerMove = movements.map(m => Math.abs(m[0]) + Math.abs(m[1]));
console.log('2b. Total steps per move in any direction (rectilinear) = ', totalStepsPerMove);

// 3. If specification is for filtered array in 1, the total steps taken in each case of 
// sequence of movements is:

function totalStepsPerCase(stepsPerMove) {
    let totPerCase = 0;
    stepsPerMove.forEach(n => totPerCase += n);
    return totPerCase; 
    }
// Using filtered result from 2a.
console.log("3a. With onlyLeftForwardMoves, total steps/case: ", totalStepsPerCase(totalLeftForwardStepsPerMove));

// Without filter and using rectilinear distance from 2a.
console.log("3b. With all moves, total steps/case: ", totalStepsPerCase(totalStepsPerMove));