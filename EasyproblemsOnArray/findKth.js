// K’th Smallest/Largest Element in Unsorted Array
//Given an array arr[] of size N and a number K, where K is smaller than the size of the array. Find the K’th smallest element in the given array. Given that all array elements are distinct.

const arr = [7, 10, 4, 3, 20, 15];
const k = 4;

function findkElement(arr, k) {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[k - 1]

}

console.log(findkElement(arr, k));