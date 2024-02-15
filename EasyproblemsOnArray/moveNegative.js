// Move all negative numbers to beginning and positive to end with constant extra space

// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];

function moveNegative(arr) {
    // return arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (arr[left] < 0 && left < right) {
            left++;
        }
        while (arr[right] >= 0 && left < right) {
            right--;
        }

        // Swap the elements at positions left and right
        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr;
}

console.log(moveNegative(arr))