// Count number of occurrences (or frequency) in a sorted array

// Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn) 

function numOfOccurrences(arr, x) {

    // Time complexit O(n)
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            count++;
        }
    }
    return count;

}

const arr = [1, 1, 2, 2, 2, 2, 3];
console.log(numOfOccurrences(arr, 2))