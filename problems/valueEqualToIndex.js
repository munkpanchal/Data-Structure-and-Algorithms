function valueEqualToIndex(arr) {
    // Take an empty array 
    const newArr = [];
    // Check if the array is empty or not
    if (arr.length === 0) {
        return newArr;
    }

    // loop through the array to check its value equal to index

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === (i + 1)) {
            newArr.push(element);
        }
    }
    return newArr;
}


const arr = [6, 2, 5, 4, 24, 2, 2, 32, 41, 1];
const result = valueEqualToIndex(arr);
console.log(result);