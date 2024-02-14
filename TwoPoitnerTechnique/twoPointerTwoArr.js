const arr1 = [1, 4, 5, 7];
const arr2 = [10, 20, 30, 40];

function twoPointer(arr1, arr2, x) {
  let minDiff = Infinity;
  let i = 0;
  let j = arr2.length -1;
  let res1, res2;

  while(i < arr1.length && j >= 0){
    let sum = arr1[i] + arr2[j];
    let diff = Math.abs(sum -x);

    if(diff < minDiff){
      minDiff = diff;
      res1 = arr1[i];
      res2 = arr2[j]
    }

    if(sum > x){
      j--;
    } else {i++};
  
  }

  return [res1, res2];
  
}

console.log(twoPointer(arr1, arr2, 18)  )