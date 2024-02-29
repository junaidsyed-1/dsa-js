// Print all possible strings that can be made by placing spaces

// Given a string you need to print all possible strings that can be made by placing spaces (zero or one) in between them. 

function allPossibleStrings(str, index, output) {

    if (str.length === 0) {
        return [''];
    }

    // Take the first character of the string
    const firstChar = str[0];

    // Recursively generate strings for the rest of the string
    const restOfString = str.slice(1);
    const substrings = allPossibleStrings(restOfString);

    // Append the first character to each generated string
    const result = [];
    for (const substring of substrings) {
        result.push(firstChar + substring); // Without space
        result.push(firstChar + ' ' + substring); // With space
    }

    return result;
}

const input = "ABC";
console.log(allPossibleStrings(input, 0, ''));