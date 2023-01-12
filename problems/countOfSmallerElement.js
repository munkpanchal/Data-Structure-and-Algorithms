const countOfSmallerElement = (arr, x) => {
    let counter = 0;
    for (let val of arr) {
        if (val <= x) counter++;
    }
    return counter;

};

const arr = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let x = 10;
const result = countOfSmallerElement(arr, x);
console.log(result);