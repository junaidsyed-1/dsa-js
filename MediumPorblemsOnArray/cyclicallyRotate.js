// Program to cyclically rotate an array by one
// Given an array, the task is to cyclically rotate the array clockwise by one time. 

const arr = [1, 2, 3, 4, 5];

function cyclicallyRotate(arr) {

    const lastIndex = arr.length - 1;
    const lastElement = arr[lastIndex];

    for (let i = lastIndex; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = lastElement;

    return arr;

};

console.log(cyclicallyRotate(arr));