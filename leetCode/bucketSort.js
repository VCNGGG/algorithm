var bucketSort = () => {
    let arr = new Array(11);
    let marks = [5,3,5,2,8];
    let newArr = [];
    for(init = 0; init < arr.length; init++) {
        arr[init] = 0;
    };
    for(i = 0; i < marks.length; i++) {
        arr[marks[i]]++;
    };
    for(j = 0; j < arr.length; j++) {
        if(arr[j] == 0) {
            continue;
        } else {
            for(l = 0; l < arr[j]; l++) {
                newArr.push(j);
            };
        };
    };
    return newArr;
}