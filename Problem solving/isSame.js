// Naive solution 
// Time Complexity : O(n^2)

// function isSame(arr1, arr2){

//     // if the length of both the array is not equal then return false;
//     if(arr1.length !==arr2.length) return false;

//     // loop over the first array 
//     for(let val of arr1){

//         // find the index of the square of the value in the second array
//         let isPresent = arr2.indexOf(val**2);

//         // if element is not found then return false
//         if(isPresent==-1){
//           return false;   
//         }
//         // remove the element at that founded index
//         arr2.splice(isPresent,1);
//     }
//     // finally return true
//     return true;
// }

// Nice solution 
// Time Complexity : O(n)
function isSame(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let obj = {};
    for (let val of arr2) {

        obj[val] ? obj[val]++ : obj[val] = 1;

    }
    for (let val of arr1) {
        if (!(val ** 2 in obj)) {
            return false;
        }
        else {
            obj[val ** 2]--;
        }
    }
    return true;
}


let arr1 = [2, 5, 1];
let arr2 = [25, 1, 4];
isSame(arr1, arr2);