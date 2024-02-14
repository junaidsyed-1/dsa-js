const arr = [1, 3, 4, 7, 10];
const x = 15;

function closestToX(arr, x) {
  let minDiff = Infinity;
  let i = 0;
  let j = arr.length - 1;
  let res1, res2;

  while (i < j) {
    let sum = arr[i] + arr[j];
    let diff = Math.abs(sum - x);
    if (diff < minDiff) {
      minDiff = diff;
      res1 = arr[i];
      res2 = arr[j];
    }
    if (sum > x) {
      j--;
    } else {
      i++;
    }
  }
  return [res1, res2];
}

console.log(closestToX(arr, x));
