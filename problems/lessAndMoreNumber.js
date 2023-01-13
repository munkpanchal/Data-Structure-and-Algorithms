const lessAndMoreCount = (arr, k) => {
    let less = 0;
    let more = 0;

    for (let val of arr) {
        if (val < k) {
            less++;
        }
        else if (val > k) {
            more++;
        }
        else if (val === k) {
            less++;
            more++;
        }
    }
    return [less, more];
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 2;
const result = lessAndMoreCount(arr, k);
console.log(result);