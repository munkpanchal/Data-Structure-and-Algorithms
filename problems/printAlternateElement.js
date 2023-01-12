function printAlternateNumber(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i += 2) {
        str += `${arr[i]} `;
    }
    return str;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const result = printAlternateNumber(arr);
console.log(result);