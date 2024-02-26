const arr = [-7, 1, 5, 2, -4, 3, 0];

function equilibriamIndex(arr) {
  let n = arr.length;
  let left = [];
  let right = [];
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < n; i++) {
    leftSum += arr[i];
    left.push(leftSum);
  }

  for (let i = n - 1; i >= 0; i--) {
    rightSum += arr[i];
    right.unshift(rightSum);
  }

  for (let i = 0; i < n; i++) {
    if (left[i] === right[i]) {
      return i;
    } 
  }
  return -1;
}
console.log(equilibriamIndex(arr));
