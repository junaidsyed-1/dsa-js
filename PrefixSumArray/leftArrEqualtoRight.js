const arr = [2, 3 ,4, 1 ,4 ,5];

function findElement(arr) {
  const totalSum = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0); //19

  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    const rightSum = totalSum - leftSum - arr[i]; 
    if (leftSum === rightSum) {
      return arr[i];
    }
    leftSum += arr[i];
  }
  return -1;
}

console.log(findElement(arr));

//19-0-2=> 17 // leftsum = 0, arr[0] =2 , rightSum = 17
// 19 -2-3=> 14 // lefSum = 2 , arr[1] =3, rightSum =  14
// 19 -5 -4 => 10 // leftSum = 5, arr[2] = 4, rightSum =10
// 19 - 9 - 1 => 9 // leftSum = 9, arr[3] =1, rightSum = 9
// 19 - 10 -4 => 5 // leftSum = 10, arr[4] = 4
// 19 - 15 - 5 => -1 // leftSum = 14, arr[5] = 5