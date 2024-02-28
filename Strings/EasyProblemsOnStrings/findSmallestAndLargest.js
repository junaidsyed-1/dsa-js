// Program to find Smallest and Largest Word in a String

// Given a string, find the minimum and the maximum length words in it. 

function findMinMaxLength(str) {

    let words = str.split(' ');

    let minLengthWord = words[0];
    let maxLengthWord = words[0];

    for (let i = 1; i < words.length; i++) {
        let word = words[i];

        if (word.length < minLengthWord.length) {
            minLengthWord = word;
        } else if (word.length > maxLengthWord.length) {
            maxLengthWord = word;
        }
    };

    return {
        minLengthWord: minLengthWord,
        maxLengthWord: maxLengthWord
    };

};

const str = "This is a test string";
let result1 = findMinMaxLength(str);
console.log(result1.maxLengthWord, result1.minLengthWord);