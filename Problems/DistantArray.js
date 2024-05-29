/** This Function returns an array with unique elements from the given array. */
const uniqueArray = (arr) => {
  // creating an empty array to store output
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

const array = [1, 2, 3, 4, 5, 4, 3, 2, 1, 22, 33, 22, 3];

const result = uniqueArray(array);

console.log(result);

/*
 UniqueArray function takes an array as parameter and returns an distant elements array
It uses for loop to iterate through given array and checks 
if the current element in given array is present in result array or not.
It uses indexOf function to check elements in result array.
Finally it returns result array.
 */
