function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            let temp = arr[j];
            arr[j] = arr[j - 1]
            arr[j - 1] = temp;
        }

    }
    return arr;
}

console.log(insertSort([4, 5, 3, 7, 9, 5, 8, 0, 5]))

function insertSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;

    }
    return arr;
}
console.log(insertSort2([4, 5, 3, 7, 9, 5, 8, 0, 5]))


function shellSort(arr) {
    let len = arr.length;
    // gap 即为增量
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < len; i++) {
        let j = i;
        let current = arr[i];
        while(j - gap >= 0 && current < arr[j - gap]) {
          arr[j] = arr[j - gap];
          j = j - gap;
        }
        arr[j] = current;
      }
    }
    return arr;
  }
   
   
  var arr = [3,5,7,1,4,56,12,78,25,0,9,8,42,37];
  console.log(shellSort(arr));




