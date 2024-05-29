/**  Function to check if a given string is a palindrome. */

const palondrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const result = palondrome("racecar");

console.log(result);

/*
Palondrome function takes string as parameter and returns true or false
It uses for loop to traverse the array and check if the array is palondrome or not
*/
