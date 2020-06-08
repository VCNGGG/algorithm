

function quickSort(arr, start, end) {
    if (start > end) {
        return;
    }
    let i = start,
        j = end,
        pivot = arr[start]; //存放基准数
    while (i < j) {
        // 从右边开始，找第一个小于基准的位置
        while (arr[j] >= pivot && i < j) {
            j--;
        }
        // 从左边开始，找第一个大于基准的位置
        while (arr[i] <= pivot && i < j) {
            i++
        }
        // 交换两个数
        if (i < j) {
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
    // 最后把基准数归位
    console.log(i,j);
    arr[start] = arr[i];
    arr[i] = pivot;
    // 递归处理左边
    quickSort(arr, start, i - 1);
    // 递归处理右边
    quickSort(arr, i + 1, end);
}
var arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

// var quickSort = function (arr) {
//     if (arr.length <= 1) {//如果数组长度小于等于1无需判断直接返回即可 
//         return arr;
//     }
//     var pivotIndex = Math.floor(arr.length / 2);//取基准点 
//     var pivot = arr.splice(pivotIndex, 1)[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
//     console.log(pivot)
//     var left = [];//存放比基准点小的数组
//     var right = [];//存放比基准点大的数组 
//     for (var i = 0; i < arr.length; i++) { //遍历数组，进行判断分配 
//         if (arr[i] < pivot) {
//             left.push(arr[i]);//比基准点小的放在左边数组 
//         } else {
//             right.push(arr[i]);//比基准点大的放在右边数组 
//         }
//     }
//     //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1； 
//     return quickSort(left).concat([pivot], quickSort(right));
// };



// var quickSort = function (arr, k) {
//     // if (arr.length === k) {//如果数组长度小于等于1无需判断直接返回即可 
//     //     return arr[0];
//     // }
//     // var pivotIndex = Math.floor(arr.length / 2);//取基准点 
//     var pivot = arr[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数

//     var left = [];//存放比基准点小的数组
//     var right = [];//存放比基准点大的数组 
//     for (var i = 0; i < arr.length; i++) { //遍历数组，进行判断分配 
//         if (arr[i] < pivot) {
//             left.push(arr[i]);//比基准点小的放在左边数组 
//         } else {
//             right.push(arr[i]);//比基准点大的放在右边数组 
//         }
//     }
//     //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1； 

//     console.log(left, pivot, right, k)

//     if (right.length === k) {
//         console.log("rrrrrrrrrrrrr", right)
//         return right[0]
//     } else if (right.length > k) {
//         right.splice(0, 1)
//         return quickSort(right, k)
//     } else {
//         return quickSort(left, k - right.length)
//     }


//     // return quickSort(left).concat([pivot], quickSort(right));
// };

// console.log(quickSort([4,2,8,5,6,8,2,4,3,6,9,0,4],5))



// var quickSort = function (arr ,k) {
//     var pivot = arr.splice(0, 1)[0];//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数
//     var left = [];//存放比基准点小的数组
//     var right = [];//存放比基准点大的数组 
//     for (var i = 0; i < arr.length; i++) { //遍历数组，进行判断分配 
//         if (arr[i] < pivot) {
//             left.push(arr[i]);//比基准点小的放在左边数组 
//         } else {
//             right.push(arr[i]);//比基准点大的放在右边数组 
//         }
//     }
//     if(right.length === k){

//         return right[0]
//     }else if(right.length > k){
//         return quickSort(right,k)
//     }else{
//         return quickSort(left,k - right.length)
//     }
// };

// var findKthLargest = function (nums, k) {
//     return quickSort(nums, k)
// };


// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))



// var reverseVowels = function (s) {




//     let left = 0;
//     let right = s.length - 1;
//     let yuan = ["a", "e", "i", "o", "u"]
//     while (left < right) {


//         console.log(s[left], yuan.includes(s[left]))

//         while (left < right && !yuan.includes(s[left])) {
//             left++;
//         }

//         while (left < right && !yuan.includes(s[right])) {
//             right--;
//         }

//         console.log(left, right)

//         let temp = s[left];
//         s[left] = s[right];
//         s[right] = temp;
//         left++;
//         right--;

//     }
//     return s;


// };
// console.log(reverseVowels("hello"))

