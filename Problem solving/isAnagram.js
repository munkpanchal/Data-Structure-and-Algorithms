// function to check if the given two strings are valid anagram or not
// Time complexity : O(n) time

function isAnagram(str1, str2) {

    if (str1.length !== str2.length) return false;

    const strObj = {};

    for (let val of str1) {
        strObj[val] = strObj[val]++ || 1;
    }
    for (let val of str2) {
        if (!strObj[val]) {
            return false;
        }
        else {
            strObj[val]--;
        }
    }

    return true;
}

let str1 = "catis";
let str2 = "siatc";

isAnagram(str1, str2);