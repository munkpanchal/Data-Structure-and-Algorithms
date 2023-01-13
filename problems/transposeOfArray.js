const transposeArr = (arr) => {
    let row = arr.length;
    let column = arr[0].length;
    let str = "";
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            str += arr[i][j] + " ";
        }
        str += "\n";
    }
    console.log("Before transpose : ");
    console.log(str);
    let mstr = "";
    for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
            mstr += arr[j][i] + " ";
        }
        mstr += "\n";
    }
    console.log("After transpose : ");
    console.log(mstr);

};

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
transposeArr(arr);