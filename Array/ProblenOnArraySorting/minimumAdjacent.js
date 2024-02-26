function minimumSwaps(arr) {
  let swaps = 0;
  let onesCount = 0;

  // Count the number of ones in the array
  for (let num of arr) {
    if (num === 1) {
      onesCount++;
    }
  }

  // Iterate from the end of the array
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 1) {
      onesCount--; // Decrement ones count as we are moving from right to left
    } else {
      // Add the count of remaining ones to swaps
      swaps += onesCount;
    }
  }

  return swaps;
}

// Example usage:
const arr1 = [0, 0, 1, 0, 1, 0, 1, 1];
const arr2 = [0, 1, 0, 1, 0];

console.log(minimumSwaps(arr1)); // Output: 3
console.log(minimumSwaps(arr2)); // Output: 3
