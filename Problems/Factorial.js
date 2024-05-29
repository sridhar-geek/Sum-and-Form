/** A recursive function that takes a number and returns its factorial */
const factorial = (num) => {
  let result = 1;
  // base case: factorial of 0 or 1 is 1
  if (num === 0 || num === 1) {
    return 1;
  }
  // recursive case: factorial of n is n * factorial of n-1
  return num * factorial(num - 1);
};

const result = factorial(10);

console.log(result);


/* Factorial function takes a number as a parameter and returns its factorial 
if number is equall to 0 or 1 it will return 1, otherwise it uses recurrsion function*/