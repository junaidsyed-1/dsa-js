// Find the Minimum element in a Sorted and Rotated Array

// Given a sorted array arr[] (may be distinct or may contain duplicates) of size N that is rotated at some unknown point, the task is to find the minimum element in it. 

function findMin(arr) {

    // Two pointer
    let low = 0;
    let high = arr.length - 1

    if (arr[low] < arr[high]) {
        return arr[low];
    };

    while (low < high) {
        let mid = Math.abs((high - low) / 2);

        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else if (arr[mid] < arr[low]) {
            high = mid;
        } else {
            high--;
        }
    };

    return arr[low];

};

const arr = [5, 6, 1, 2, 3, 4];

console.log(findMin(arr));
