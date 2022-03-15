var searchInsert = function(nums, target) {
    
    //loop through the array
    //check if the number matches, if match, return i
    //check if the number is higher, if higher, return i - 1
    ans = nums.length;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target)
            return i
        else if(nums[i] > target)
            return i
    }
    return ans;
};

let arr1 = [3,4,5,6]

console.log(searchInsert(arr1, 5))
console.log(searchInsert(arr1, 2))
console.log(searchInsert(arr1, 7))