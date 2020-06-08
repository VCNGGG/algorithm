// 堆排序的主程序
function heapSort(arr) {
    // 1、构建最大堆
    buildMaxHeap(arr)
    console.log(arr);
    // 2、从堆尾出发，依次 交换堆尾与堆头的值；并将 除堆尾外的 剩余堆 重新调整为最大堆
    for (var i = arr.length - 1; i >= 0; i--) {
        swap(arr, 0, i)
        maxHeapify(arr, 0, i) //此时 i 作为 heapSize 传入 maxHeapify，即 忽略了最后一个已经排好的元素
    }
    return arr
}

function swap(a, i, j) {
    var temp = a[i]
    a[i] = a[j]
    a[j] = temp
}
function buildMaxHeap(arr) {
    // 从 末尾节点的父节点 开始调整，直至根节点
    var iParent = Math.floor(arr.length / 2) - 1
    for (var i = iParent; i >= 0; i--) {
        maxHeapify(arr, i, arr.length)
    }
}
function maxHeapify(arr, index, heapSize) { // heapSize 会一直变小，直至为0
    var iMax = index
    var iLeft = 2 * index + 1
    var iRight = 2 * (index + 1)
    if (iLeft < heapSize && arr[iLeft] > arr[iMax]) {
        iMax = iLeft
    }
    if (iRight < heapSize && arr[iRight] > arr[iMax]) { // 注意 这里 是 iMax 而不是 index！！
        iMax = iRight
    }
    if (iMax != index) {
        swap(arr, iMax, index)
        maxHeapify(arr, iMax, heapSize) // 注意 这里是iMax 而不是 index ！ 因为新的 arr[index] 作为 父节点 已经在此轮完成堆调整了
    }
}

console.log(heapSort([33,4,66,7,8,48,54,6,78,8,37,84,55,6,7]))
