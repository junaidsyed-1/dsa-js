// Maximum sum of i*arr[i] among all rotations of a given array

// Given an array arr[] of n integers, find the maximum that maximizes the sum of the value of i*arr[i] where i varies from 0 to n-1.
//Input: arr[] = {8, 3, 1, 2}
// Output: 29

function maxSumOfRotation(arr) {

    let sum = 0;
    let arrSum = 0;

    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
        sum += i * arr[i];
    };

    let maxSum = sum;

    for (let i = 1; i < arr.length; i++) {
        sum = sum + arrSum - arr.length * arr[arr.length - 1];

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
};

const arr = [8, 3, 1, 2];
console.log(maxSumOfRotation(arr));