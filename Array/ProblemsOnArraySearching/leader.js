const arr1 = [16, 17, 4, 3, 5, 2];

function leader(arr) {
  const n = arr.length;
  let maxRight = arr[n - 1];
  const leaders = [maxRight];
  console.log(maxRight)
  console.log(leaders)

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > maxRight) {
      leaders.unshift(arr[i]);
      maxRight = arr[i];
    }
  }
  return leaders
}

console.log(leader(arr1))