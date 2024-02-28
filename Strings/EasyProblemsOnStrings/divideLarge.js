// Divide large number represented as string

// Given a large number (represented as a string) which has to divide by another number (represented as int data type). The large number can be very large which does not even fit in long long in C++. The task is to find the division of these numbers.

function divideLargeNumber(dividend, divisor) {

    // Intialized a var to hold the dividend
    // let result = '';
    // let remainder = 0;

    // // Iterate through each digit of the dividend from left to right
    // for (let i = 0; i < dividend.length; i++) {

    //     // Covert the dividend into integer
    //     let currentDigit = parseInt(dividend[i]);

    //     // Update the current dividend
    //     let currentDividend = remainder * 10 + currentDigit;

    //     // Lets perform division
    //     let quotient = Math.floor(currentDividend / divisor);
    //     remainder = currentDividend % divisor;

    //     result += quotient; // Appending the quotient to result

    // }

    // result = result.replace(/^0+/, '');

    // if (remainder !== 0) {
    //     result += Math.floor(remainder / divisor);
    // }

    // return result;


    let result = '';
    let dividenNum = parseInt(dividend);

    let quotient = Math.floor(dividenNum / divisor);

    result += quotient;

    return result;

};

console.log(divideLargeNumber('1248163264128256512', 125))