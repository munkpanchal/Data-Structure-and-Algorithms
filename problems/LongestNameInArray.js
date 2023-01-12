const longestNameInArray = (arr) => {

    let max = arr[0];
    for (let val of arr) {
        if (val.length > max.length) {
            max = val;
        }
    }
    return max;

};
const array = ["test1", "test222", "tes33"];
const result = longestNameInArray(array);
console.log(result);