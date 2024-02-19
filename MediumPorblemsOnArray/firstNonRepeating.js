// Find first non-repeating element in a given Array of integers
// Given an array of integers of size N, the task is to find the first non-repeating element in this array. 

function findFirstNonRepeatingElement(arr) {

    const frequencies = {};

    for (const num of arr) {
        frequencies[num] = (frequencies[num] || 0) + 1;
    }

    for (const num of arr) {
        if (frequencies[num] === 1) {
            return num;
        }
    }

    return -1;

};

const arr = [-1, 2, -1, 3, 0];

console.log(findFirstNonRepeatingElement(arr));