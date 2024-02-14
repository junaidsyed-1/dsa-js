const arr = [4, 3, 2, 1]

function minimumSwaps(arr) {
  const n = arr.length;
  let swaps = 0;

  for (let i = 0; i < n; i++) {
  
      if (arr[i] === i + 1) continue;

      const temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp;

      swaps++;
      i--; 
  }

  return swaps;
}

console.log(minimumSwaps(arr))