// Add n binary strings

// Given n binary strings, return their sum (also a binary string).

function addNbinaryStrings(arr) {

    let maxLength = Math.max(...arr.map(str => str.length)); // Find the maximum length among binary strings
    let sum = []; // Initialize sum array
    let carry = 0; // Initialize carry

    // Iterate through each position from right to left
    for (let i = 0; i < maxLength; i++) {
        let digitSum = carry; // Initialize sum for current position

        // Iterate through each binary string
        for (let j = 0; j < arr.length; j++) {
            let digit = parseInt(arr[j][arr[j].length - 1 - i] || '0'); // Convert character to integer
            digitSum += digit; // Add current digit
        }

        sum.unshift(digitSum % 2); // Append sum modulo 2 to sum array
        carry = Math.floor(digitSum / 2); // Update carry
    }

    // If there is a carry remaining, append it to the sum array
    if (carry !== 0) {
        sum.unshift(carry);
    }

    // Convert sum array to string and return
    return sum.join('');

};

const str = ["11", "1"];

console.log(addNbinaryStrings(str));