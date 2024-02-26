const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];

function majorityElement(arr) {
  let canditate = null;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      canditate = arr[i];
      count = 1;
    } else if (arr[i] === canditate) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === canditate) {
      count++;
    }
  }

  if (count > arr.length / 2) {
    return canditate;
  } else {
    return "No Majority Element";
  }
}

console.log(majorityElement(arr));
