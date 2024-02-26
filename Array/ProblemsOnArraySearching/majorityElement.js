const arr = [1, 1, 2, 4, 4, 4, 6, 6];

function majorityElement(arr, x) {
  let n = arr.length;
  const halfSize = Math.floor(n / 2);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
      count++;
    }
  }
  return count > halfSize;
}

console.log(majorityElement(arr, 4));
