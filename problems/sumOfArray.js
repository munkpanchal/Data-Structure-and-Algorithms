function sumArray(arr) {
    let sum = 0;
    for (let val of arr) {
        sum += val;
    }
    return sum;
}

let arr = [1, 2, 3, 4];
let result = sumArray(arr);
console.log(result);