// Second most repeated word in a sequence

// Given a sequence of strings, the task is to find out the second most repeated (or frequent) string in the given sequence.(Considering no two words are the second most repeated, there will be always a single word).

function secondMostRepeated(s) {

    let freqMap = {};

    // Iterate through each word
    for (let word of s) {
        // Let's check if the word already exist in the freqMap
        if (freqMap[word] === undefined) {
            // If it does not exist, add it to the hash table with a frequency of 1.
            freqMap[word] = 1;
        } else {
            // If it does exist, increment its frequency in the hash table.
            freqMap[word]++;

        };
    }

    // find the maximum frequency value 
    let maxFreq = -1;
    for (let word in freqMap) {
        if (freqMap[word] > maxFreq) {
            maxFreq = freqMap[word];
        }
    };

    // Find the second most repeadted word
    let secondMaxFreq = -1;
    let secondMostRepeatedWord = "";
    for (let word in freqMap) {
        if (freqMap[word] !== maxFreq && freqMap[word] > secondMaxFreq) {
            secondMaxFreq = freqMap[word];
            secondMostRepeatedWord = word
        }
    };

    return secondMostRepeatedWord;

};

const s = ["geeks", "for", "geeks", "for", "geeks", "aaa"]

console.log(secondMostRepeated(s));