// Check if two strings are anagram or not.

function isAnagram(str1, str2) {

    // we can split the strings into array and then sort and then compare;

    // lets conver the strings to lowecase;
    const cleanStr1 = str1.toLowerCase();
    const cleanStr2 = str2.toLowerCase();

    // If their length is not eaqual then return false;
    if (cleanStr1.length != cleanStr2.length) {
        return false;
    };

    // Lets sort them
    sortedStr1 = cleanStr1.split('').sort().join('');
    sortedStr2 = cleanStr2.split('').sort().join('');

    // Lets compare
    if (sortedStr1 === sortedStr2) return true;

    return false;

};

const str1 = "listen";
const str2 = "silent";

console.log(isAnagram(str1, str2));