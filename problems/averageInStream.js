const averageInStream = (arr, n) => {

    let newArr = new Array();

    sum = 0;
    count = 1;
    for (const val of arr) {
        sum += val;
        let median = sum / count;
        count++;
        newArr.push(median);

    }

    return newArr;

};

let arr = [10, 20, 30, 40, 50];
let length = arr.length;

const result = averageInStream(arr, length);
console.log(result);

