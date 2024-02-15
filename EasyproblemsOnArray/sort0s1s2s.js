// Sort an array of 0s, 1s and 2s | Dutch National Flag problem

// Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

function sort0s(arr) {
    // First method 
    // return arr.sort((a, b) => a - b);

    // Second method 
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}

const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
console.log(sort0s(arr));