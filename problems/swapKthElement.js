const swapKthElement = (arr, k) => {
    k--;
    let x = k;
    let y = n - k - 1;

    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;



};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 4;
const result = swapKthElement(arr, k);
console.log(result);