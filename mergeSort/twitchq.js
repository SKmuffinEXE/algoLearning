//this is the problem on twitch where we return the value of how many times we had to shift a character



function mergeCountFinder(arr){
    let mergeCount = 0;

    mergeSortTopDown(arr)

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
            console.log("left: " + left + " right: " + right)
            if(left[0] < right[0]) {
                array.push(left.shift())
                
            } else
                {
                    console.log("pushing " + right)
                    array.push(right.shift())
                    mergeCount++
                    
                    console.log("merge " + mergeCount)
                }
                
         
        }
    
        return array.concat(left.slice()).concat(right.slice())
    }
    console.log(mergeSortTopDown(arr))
    return mergeCount
}





(function test() {

const test1 = [4, 5, 2, 1, 3, 8]
const test2 = [1, 2,3, 5, 4, 3]

//console.log(mergeCountFinder(test1))
console.log(mergeCountFinder(test2))
})()