// Generate all binary strings from given pattern

// Given a string containing of ‘0’, ‘1’ and ‘?’ wildcard characters, generate all binary strings that can be formed by replacing each wildcard character by ‘0’ or ‘1’. 

function generate0and1(str) {

    const result = [];

    function generate(str, index) {
        if (index === str.length) {
            result.push(str);
            return;
        }

        if (str[index] === "?") {
            const startWith0 = str.substring(0, index) + '0' + str.substring(index + 1);
            generate(startWith0, index + 1);

            const startWith1 = str.substring(0, index) + '1' + str.substring(index + 1);
            generate(startWith1, index + 1);
        } else {
            generate(str, index + 1);
        };

    };

    generate(str, 0);
    return result;

};

const str = "1??0?101"

const str1 = "junaid"
console.log(str1.substring(0))

console.log(generate0and1(str));

