
 var isHappy = function(n) {
   
    let seen = []

    while(!seen.includes(n)){
        seen.push(n)
        let sqSum = 0
        while(n > 0){
            sqSum+= (n%10)**2
            n = Math.floor(n/10)
        }
        if(sqSum === 1){
            return true;
        }
        n = sqSum

    }
    return false
};

console.log(isHappy(2))

console.log(19%10)
