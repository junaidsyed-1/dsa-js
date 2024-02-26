const arr = [12, 3, 4, 1, 6, 9];
const x = 24;

function tripleSum(arr, x) {
  let n = arr.length;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    let current = arr[i];
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = current + arr[left] + arr[right];

      if(sum === x){
        return [current, arr[left], arr[right]];
      } else if( sum < x) {
        left++
      } else {
        right--;
      }
    }
  }
      return [];
    
};

console.log(tripleSum(arr, x))
