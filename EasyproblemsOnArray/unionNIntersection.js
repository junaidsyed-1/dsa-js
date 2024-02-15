// Union and Intersection of two sorted arrays
// Given two sorted arrays, find their union and intersection.

function unionNIntersection(arr1, arr2) {

    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const result = [...new Set([...set1, ...set2])];
    return result;

}

const arr1 = [1, 3, 4, 5, 7];
const arr2 = [2, 3, 5, 6];

console.log(unionNIntersection(arr1, arr2));