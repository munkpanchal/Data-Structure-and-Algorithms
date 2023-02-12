function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > element; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = element;
  }

  return arr;
}

const arr = [3, 2, 5, 1, 9];
const result = insertionSort(arr);
console.log(result);
