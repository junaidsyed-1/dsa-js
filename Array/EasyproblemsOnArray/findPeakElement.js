// Find a peak element which is not smaller than its neighbours

// Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.

const arr = [5, 10, 2, 15,];
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

function peakElement(arr) {

    // let peakIndex = 0;
    // const n = arr.length;

    // if (arr[n - 1] >= ar{
    //     return arr[nr[n - 2])  - 1];
    // }

    // for (let i = 1; i < n - 1; i++) {
    //     if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
    //         peakIndex = i;
    //         break;
    //     }
    // }

    // return arr[peakIndex];


    // Another way

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the middle element is a peak
        if ((mid === 0 || arr[mid] >= arr[mid - 1]) && (mid === arr.length - 1 || arr[mid] >= arr[mid + 1])) {
            return arr[mid];
        }

        // If the element to the left of mid is greater, search the left half
        if (mid > 0 && arr[mid - 1] > arr[mid]) {
            right = mid - 1;
        }
        // If the element to the right of mid is greater, search the right half
        else {
            left = mid + 1;
        }
    }

    return -1; // Peak not found

}


console.log(peakElement(arr));