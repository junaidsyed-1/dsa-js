// Find the missing Number
// Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.

const arr = [1, 2, 3, 5];

function findMissing(arr, N) {

    // const sumFirstN = (N * (N + 1) / 2);

    // let sumArray = 0
    // for (let i = 0; i < arr.length; i++) {
    //     sumArray += arr[i];
    // };

    // const missingNumber = sumFirstN - sumArray;

    // return missingNumber;

    // Another solution is to compare the index to arr[i]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    };

    return arr.length + 1;

};

console.log(findMissing(arr, arr.length + 1));