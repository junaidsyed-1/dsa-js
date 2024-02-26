// Count subarrays with equal number of 1’s and 0’s
// Given an array arr[] of size n containing 0 and 1 only. The problem is to count the subarrays having an equal number of 0’s and 1’s

function countSubArrays(arr) {
    let count = 0; // Initialize count of subarrays
    let sum = 0; // Initialize cumulative sum
    const frequencyMap = new Map(); // Initialize hashmap to store cumulative sums and their frequencies
    frequencyMap.set(0, 1); // Initialize map with key 0 and value 1 to handle the case where the subarray from the beginning of the array has equal 0's and 1's

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Update cumulative sum
        sum += (arr[i] === 0 ? -1 : 1);

        // Check if the cumulative sum is present in the hashmap
        if (frequencyMap.has(sum)) {
            // Increment count by the frequency value
            count += frequencyMap.get(sum);
        }

        // Update the hashmap with the cumulative sum encountered so far
        frequencyMap.set(sum, (frequencyMap.get(sum) || 0) + 1);
    };

    return count;
};

const arr = [1, 0, 0, 1, 0, 1, 1];

console.log(countSubArrays(arr));