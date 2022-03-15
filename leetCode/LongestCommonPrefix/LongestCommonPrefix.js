var longestCommonPrefix = function(strs) {
    
   
    
    let ans = []

    for(let i = 0; i < strs[0].length; i++){
        //array to go through the letters of the first word of the array
        let letter = strs[0][i]
        let checker= true;
        
        //goes through the array to see if letter matches.
        for(let x = 0; x<strs.length; x++){
            if(strs[x][i] != letter){
                checker = false
            }
        }

        //if letter matches all the array words, push the letter, if not, break the algo
        if(checker === true){
            ans.push(letter)
        }
        else
        break;

    }

    if(ans[0] === undefined)
        return ""

    return ans.join('');
};

arr1 =  ["flower","flow","flight"]
arr2 = ["cir","car"]

console.log(longestCommonPrefix(arr1))
//"fl"

console.log(longestCommonPrefix(arr2))
//"c"