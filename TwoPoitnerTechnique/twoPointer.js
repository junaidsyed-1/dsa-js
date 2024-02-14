const arr = [10, 20, 35, 50, 75, 80];
const x= 85;

function twoPointer(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[i] + arr[j] === x) {
        return true;
      }
    }
  }
  return false;
} //O(n^2)

function realTwoPointer(arr, x) {
  let i = 0; // Represent First Pointer
  let j = arr.length - 1; // Last element of the arr represents second pointer

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === x) {
      return true;
    } else if (sum < x) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}
console.log(realTwoPointer(arr, x)); // Time complexity O(nlogn)
// console.log(twoPointer(arr, 70)); // Time complexity O(n^2)
