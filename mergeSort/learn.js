function mergeSortTopDown(array) {
    if(array.length <= 1){
        return array;
    }

    const middle = Math.floor(array.length/2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right)) 
}

function mergeTopDown(left, right){
    const array = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            array.push(left.shift())
        } else
            array.push(right.shift())
    }

    return array.concat(left.slice()).concat(right.slice())
}

(function test() {

    const test1 = [4, 5,2,1,3,8, 23]
    const test2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888]
    const test3 = [2,1]
    console.log(mergeSortTopDown(test1))
    console.log(mergeSortTopDown(test2))
    console.log(mergeSortTopDown(test3))
})()