// I will write all the in-built JS basic methods here
// All these methods return a new string, they do not modify the original string, because strings are immutable.

const str = "Junaid is the best coder ";

// 1. length : tells the length of the string
// console.log(str.length);

// Extracting string characters
// 4 methods :
// 2.1 charAt() : return the char at a specific index
// console.log(str.charAt(0));

// 2.2 charCodeAt() : return the code of the char at a specific index
// console.log(str.charCodeAt(1), str.charCodeAt(0));

// 2.3 at() : returns the char at a specific index plus it allows the use of negative indexes while charAt do not;

// 2.4 [] : access the specific string;
// console.log(str[1])


// Extracting String parts
// There are 3 methods to extract string parts.

// 3.1 slice() : extract the part of the string and returns the extracted part;
// console.log(str.slice(7, 13));

// 3.2 substring() : it is similar to slice the diff is the start and end values less than 0 are treated as 0;
// console.log(str.slice(7, 13));

// 3.3 substr() : It is also similar to slice the diff is the second parameter specifies the length of the extracted part;
// console.log(str.substr(7, 4));

// 4. toLowerCase() 5. toUpperCase();

// 6. concat() : it concatenates two or more strings;
// console.log(str.concat(" of all time."));

// 7. trim() : it removes the whitespace from both side.
// 8. trimStart() 9. trimEnd()

// 10. padStart() : it adds a string from the start until it reaches a given length;
// console.log(str.padStart(30, "S "))
// 11. padEnd()

// 12. repeat() : returns the string with a number of copies of a string;
// console.log(str.repeat(10));

// 13. replace()
// console.log(str.replace(/Junaid/g, "Syed"));

// 14. replaceAll();

// 15. split() : it converts the string into array;
