// A string is said to be palindrome if the reverse of the string is the same as the string. For example, “abba” is a palindrome because the reverse of “abba” will be equal to “abba” so both of these strings are equal and are said to be a palindrome, but “abbc” is not a palindrome.

const str = "racecar";

function isPalindrome(str, start, end) {

    // Two Pointer
    // let l = 0;
    // let h = str.length - 1;

    // while (l < h) {
    //     if (str[l] !== str[h]) {
    //         return false;
    //     } else {
    //         l++;
    //         h--;
    //     };
    // };

    // return true;

    // Recursion

    if (start >= end) {
        return true;
    };

    if (str[start] !== str[end]) {
        return false;
    };

    return isPalindrome(str, start + 1, end - 1);

};

function checkPalindrome(str) {
    return isPalindrome(str, 0, str.length - 1);
}

console.log(checkPalindrome(str));