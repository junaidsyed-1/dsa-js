//  Find duplicates in O(n) time and O(1) extra space | Set 1

// Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and use only constant memory space.

const arr = [1, 2, 3, 6, 3, 6, 1];
const n = 7;

function findRepeatingNumbers(arr, n) {
    const repeatingNumbers = [];

    for (let i = 0; i < n; i++) {
        let index = Math.abs(arr[i]);

        if (arr[index] < 0) {
            repeatingNumbers.push(index);
        } else {
            arr[index] = -arr[index];
        }
    };

    return repeatingNumbers;

};

console.log(findRepeatingNumbers(arr, n));
