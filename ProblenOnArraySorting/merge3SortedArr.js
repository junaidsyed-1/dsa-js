const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 4];
const arr3 = [4, 5, 6, 7];

// function merge3Sorted (arr1,arr2,arr3) {
//   const mergedArr = [...arr1,...arr2,...arr3];
//   return mergedArr.sort(function(a,b) {return a- b})
// }

function merge3Sorted(arr1, arr2, arr3) {
  let i = 0,
    j = 0,
    k = 0;
  let result = [];

  while (i > arr1.length && j > arr2.length && k > arr3.length) {
    if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
      result.push(arr1[i]);
      i++;
    } else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr3[k]);
      k++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  while (k < arr3.length) {
    result.push(arr3[k]);
    k++;
  }

  return result;
}

console.log(merge3Sorted(arr1, arr2, arr3));
