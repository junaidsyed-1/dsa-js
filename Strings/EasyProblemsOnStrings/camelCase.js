// Camel case of a given sentence

// Given a sentence, task is to remove spaces from the sentence and rewrite in Camel case. It is a style of writing where we don’t have spaces and all words begin with capital letters.

function camelCase(s) {

    let word = s.split(' ');
    let capWord = word.map((w) => w.charAt(0).toUpperCase() + w.substring(1)).join('');
    return capWord;

};

const s = "here comes the garden";
console.log(camelCase(s));