// Count strings with consecutive 1’s

// Given a number n, count number of n length strings with consecutive 1’s in them.

function countString1s(n) {

    let count = 0;

    for (let i = 0; i < Math.pow(2, n); i++) {
        let binaryString = i.toString(2).padStart(n, 0);
        if (binaryString.includes('11')) {
            count++;
        }
    }
    return count;
};

console.log(countString1s(3))