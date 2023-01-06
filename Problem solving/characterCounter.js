function isAlphaNumeric(char) {
    let charCode = char.charCodeAt(0);
    if (!(charCode > 47 && charCode < 58) && !(charCode > 64 && charCode < 91) && !(charCode > 96 && charCode < 123)) { return false; }
    return true;

}

function charCount(str) {

    let obj = {};

    // Loop over the given string
    for (let char of str) {
        char = char.toLowerCase();

        // Check if the character is isAlphaNumeric or not;
        if (isAlphaNumeric(char)) {
            // if obj[char] has value then increment it otherwise set it to 1
            obj[char] = obj[char]++ || 1;
        }
    }

    return obj;
}

let str = "Mayank Panchal";

const result = charCount(str);

console.log(result);


