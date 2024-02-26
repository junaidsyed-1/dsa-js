const arr = [1, 423, 6, 46, 34, 23, 13, 53, 4];

function findMaxOrMin(arr) {
  // return Math.max(...arr) //One way

  // Another way is sort the array first
  const sortedArr = arr.sort((a, b) => a - b);
  // return sortedArr;
  // For min valie
  // return sortedArr[0]

  // For Max
  let n = sortedArr.length;
  return sortedArr[n - 1];
}

console.log(findMaxOrMin(arr));
