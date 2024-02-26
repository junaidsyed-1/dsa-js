// Largest Sum Contiguous Subarray (Kadane’s Algorithm)

// Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum.

// The idea of Kadane’s algorithm is to maintain a variable max_ending_here that stores the maximum sum contiguous subarray ending at current index and a variable max_so_far stores the maximum sum of contiguous subarray found so far, Everytime there is a positive-sum value in max_ending_here compare it with max_so_far and update max_so_far if it is greater than max_so_far.

function maxSubArraySum(arr) {

    let max_ending_here = arr[0];
    let max_so_far = arr[0];

    for (let i = 1; i < arr.length; i++) {
        max_ending_here = Math.max(arr[i], max_ending_here + arr[i]);
        max_so_far = Math.max(max_so_far, max_ending_here);
    }

    return max_so_far
}

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];

console.log(maxSubArraySum(arr))
