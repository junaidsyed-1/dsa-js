// Rearrange array in alternating positive & negative items with O(1) extra space | Set 1

// Given an array having positive and negative numbers, our task is to arrange them in an alternate fashion such that every positive number is followed by a negative number and vice-versa maintaining the order of appearance. The number of positive and negative numbers need not to be equal. If there are more positive numbers then they have to appear at the end of the array , same condition for negative numbers also .

function rearrangePosNeg(arr) {

    let negNum = [];
    let posNum = [];
    let mergedArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negNum.push(arr[i]);
        } else {
            posNum.push(arr[i]);
        }
    };

    let i = 0, j = 0;

    while (i < posNum.length && j < negNum.length) {
        mergedArr.push(negNum[j++]);
        mergedArr.push(posNum[i++]);
    };

    while (i < posNum.length) {
        mergedArr.push(posNum[i++]);
    };

    while (j < negNum.length) {
        mergedArr.push(negNum[j++]);
    }

    return mergedArr;
};

const arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
console.log(rearrangePosNeg(arr));
// OUTPUT : [-4, 1, -1, 2, 3, 4]