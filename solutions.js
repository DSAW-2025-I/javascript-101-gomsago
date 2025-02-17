// Sum of Two Numbers
function sum(a, b) {
  return a + b; 
}

// Factorial of a Number
function factorial(n) {
  if(n==0){
    return 1;
  }
  let result = 1; 
  for(i=1; i<=n; i++){
    result *= i; 
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  let count =0;
  const vowels = 'aeiouAEIOU'
  if(vowels.includes(str[i])){
    count++;
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if(n<=1){
    return false;
  }
  for( let i =2; i <= Math.sqrt(n); i++){
    if(n% i === 0){
      return false;
    }
  }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
