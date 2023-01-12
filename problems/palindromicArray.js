const panlindromicArray = (arr) => {

    for (let val of arr) {
        let num = val;
        let reverse = 0;

        while (num != 0) {
            reverse = (reverse * 10) + (num % 10);
            num = parseInt(num / 10);
        }
        if (reverse != val) {
            return 0;
        }
    }
    return 1;

};

const arr = [111, 333, 222, 555];
const result = panlindromicArray(arr);
console.log(result);