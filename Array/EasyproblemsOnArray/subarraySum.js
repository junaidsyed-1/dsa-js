// Find Subarray with given sum | Set 1 (Non-negative Numbers)

// Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.

// Note: There may be more than one subarray with sum as the given sum, print first such subarray. 

function subarraySum(arr, sum) {

    let start = 0;
    let currSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currSum += arr[end];

        while (currSum > sum && start <= end) {
            currSum -= arr[start];
            start++;
        }

        if (currSum === sum) {
            return [start, end];
        }
    }

}

const arr = [1, 4, 20, 3, 10, 5];
const sum = 33;

console.log(subarraySum(arr, sum));