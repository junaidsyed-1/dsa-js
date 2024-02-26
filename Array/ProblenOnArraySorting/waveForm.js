const arr = [10, 5, 6, 3, 2, 20, 100, 80];

function waveForm(arr) {
  const sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 1; i < sortedArr.length; i += 2) {
    [sortedArr[i], sortedArr[i - 1]] = [sortedArr[i - 1], sortedArr[i]];
  }

  return sortedArr;
}

console.log(waveForm(arr));
