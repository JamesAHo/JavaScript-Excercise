/*
  WRITE YOUR SOLUTION HERE
*/

// reduce accumulation method

function calculation (array) {
  let sum = array.reduce((a,b) => a += b)
  return `the total price is ${sum * 1.25}`
}


console.log(calculation([3,5,6,7,73,76]))