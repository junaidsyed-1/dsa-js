const arr = [4, 2, -3, 1, 6];

function subArr(arr) {
  let sum = 0;
  let sumSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0 || sumSet.has(sum)) {
      return true;
    } else {
      sumSet.add(sum);
    }
  }
  return false;
}

console.log(subArr(arr));
