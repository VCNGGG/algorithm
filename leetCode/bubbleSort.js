function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }
    return arr;
}
console.log(bubbleSort([2, 5, 7, 3, 1, 4, 6, 7, 8, 9, 0, 3, 5]))

function bubbleSort5(arr) {

    let lastIndex = 0;
    let border = arr.length -1;

    for (let i = 0; i < arr.length - 1; i++) {
        let flag = true;
        for (let j = 0; j < border; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                lastIndex = j;
                flag = false;
            }

        }
        border = lastIndex;
        if (flag) { break };
    }
    return arr;
}
console.log(bubbleSort5([2, 5, 7, 3, 1, 4, 6, 7, 8, 9, 0, 3, 5]))