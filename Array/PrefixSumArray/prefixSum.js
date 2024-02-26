const arr = [10, 20, 10, 5, 15];

function prefixSum(arr) {
  let sum = 0;
  const prefixSumArr = [];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    prefixSumArr.push(sum);
  }

  return prefixSumArr;
}

console.log(prefixSum(arr));
