// Find the first repeating element in an array of integers

// Given an array of integers arr[], The task is to find the index of first repeating element in it i.e. the element that occurs more than once and whose index of the first occurrence is the smallest. 

const arr = [10, 6, 3, 5, 3, 4, 3, 5, 6];

function repeatingElement(arr) {

    const occurrences = {};

    let minIndex = arr.length;

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];

        // Check if the current element exists in the occurrences object
        if (occurrences[currentElement] === undefined) {
            // If it does not exist, add it to the occurrences object with its index
            occurrences[currentElement] = i;
        } else {
            // If it does exist, update the index if it's smaller than the current minIndex
            minIndex = Math.min(minIndex, occurrences[currentElement]);
        }
    }

    return minIndex === arr.length ? -1 : arr[minIndex];

};

console.log(repeatingElement(arr));