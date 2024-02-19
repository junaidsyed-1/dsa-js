// Count pairs with given sum
// Given an array of N integers, and an integer K, the task is to find the number of pairs of integers in the array whose sum is equal to K.


const arr = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];

function countPairs(arr, K) {

    const frequency = {};
    let count = 0;

    // Step 1: Populate hashmap with frequencies
    for (const num of arr) {
        if (frequency[num] === undefined) {
            frequency[num] = 1;
        } else {
            frequency[num]++;
        }
    }

    // Step 2: Iterate through array and find pairs
    for (const num of arr) {
        const target = K - num;
        if (frequency[target] !== undefined) {
            count += frequency[target];
            if (num === target) {
                count--;
            }
        }
    }

    // Step 3: Return count of pairs
    return count / 2;
};

console.log(countPairs(arr, 11));