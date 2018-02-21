let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]
const result = movements.filter(m => m[0] >= 0 && m[1] >= 0);
console.log(result);