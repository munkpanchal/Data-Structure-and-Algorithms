const isFascinating = (num) => {

    let mul2 = num * 2 + "";
    let mul3 = num * 3 + "";

    let newNum = mul2 + mul3 + num;
    let arr = newNum.split("");
    if (arr.length !== 9) return false;
    else if (arr.includes("1") && arr.includes("2") && arr.includes("3") && arr.includes("4") && arr.includes("5") && arr.includes("6") && arr.includes("7") && arr.includes("8") && arr.includes("9")) {
        return true;
    }
    else {
        return false;
    }
};

let num = 392;

isFascinating(num) ? console.log("Fascinating") : console.log("Not Fascinating");
num = 192;
isFascinating(num) ? console.log("Fascinating") : console.log("Not Fascinating");
// isFascinating(num);