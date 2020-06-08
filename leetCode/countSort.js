function countSort(arr) {
    let obj = {};
    //遍历原数组，给对象新增键值对，如果已经存在就对应的属性值++，如果不存在则新增键值对
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    let index = 0;
    //遍历对象属性名，按顺序放回覆盖原数组
    for (let key in obj) {
        while (obj[key] > 0) {
            arr[index] = Number(key);
            obj[key]--;
            index++
        }
    }
    return arr;
}
var ary=[23,14,12,24,53,31,53,35,46,12,62,23]
console.log(countSort(ary));