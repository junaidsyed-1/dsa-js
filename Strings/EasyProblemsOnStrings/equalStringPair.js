// Count number of equal pairs in a string

// Given a string s, find the number of pairs of characters that are same. Pairs (s[i], s[j]), (s[j], s[i]), (s[i], s[i]), (s[j], s[j]) should be considered different. 

function countEqualPair(str) {

    // Naive approach
    // let res = 0;

    // for (let i = 0; i < str.length; i++) {
    //     for (let j = 0; j < str.length; j++) {
    //         if (str[i] === str[j]) {
    //             res++;
    //         }
    //     }
    // }
    // return res;

    // More efficient approach 

    let cnt = new Array(MAX).fill(0);

    // Traverse the string and count
    // occurrence
    for (let i = 0; i < str.length; i++)
        cnt[str.charCodeAt(i) - 97] += 1

    // Stores the answer
    let ans = 0

    // Traverse and check the occurrence
    // of every character
    for (let i = 0; i < MAX; i++)
        ans += cnt[i] * cnt[i]

    return ans

};

const MAX = 256
const str = "geeksforgeeks";

console.log(countEqualPair(str));