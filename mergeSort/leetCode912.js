function mergeSort(arr){
    //edge case scenario
    if(arr.length <=1)
        return arr


    let median = Math.floor(arr.length/2)
    let left = arr.slice(0, median)
    let right = arr.slice(median)

    return mergeTopDown(mergeSort(left),mergeSort(right))
}

function mergeTopDown(left, right){

    const array = []
    while(left.length && right.length){
        if(left[0] < right[0])
            array.push(left.shift())
        else
            array.push(right.shift())
    }

    return array.concat(left.slice()).concat(right.slice())
}

console.log(mergeSort([1]))
console.log(mergeSort([11, 1,2, 6 ,3, 5, 4]))
// console.log(mergeSort([1,3,2,4]))