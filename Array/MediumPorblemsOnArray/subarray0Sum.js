// Subarray with 0 sum
// Given an array of positive and negative numbers, the task is to find if there is a subarray (of size at least one) with 0 sum.

function subarray0Sum(arr) {

    const prefixSums = new Set();
    let prefixSum = 0;

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        if (prefixSum === 0 || prefixSums.has(prefixSum)) {
            return true;
        }

        prefixSums.add(prefixSum);
    };

    return false;

};

const arr = [4, 2, -3, 1, 6];
console.log(subarray0Sum(arr));