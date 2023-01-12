const isPerfectArray = (arr) => {
    let length = arr.length;
    for (let i = 0; i < length / 2; i++) {
        const element = arr[i];
        if (element != arr[length - i - 1]) {
            return false;
        }
    }
    return true;

};

const arr = [1, 2, 3, 3, 2, 1];
const result = isPerfectArray(arr);
console.log(result);