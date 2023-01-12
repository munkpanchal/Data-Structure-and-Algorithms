function secondLargest(arr, n) {
    let firstLargest = -Infinity;
    let secondLargest = firstLargest;

    if (n === 0) return -1;
    const arrObj = {};

    for (let val of arr) {
        arrObj[val] = (arrObj[val] || 0) + 1;
    }
    if (arrObj[arr[0]] === n) return -1;

    for (let val of arr) {
        if (val > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = val;
        }
        else if (val > secondLargest && val != firstLargest) {

            secondLargest = val;

        }
    }

    return secondLargest;
}