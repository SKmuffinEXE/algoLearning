const countPrimes = n => {
    primeArr = []

    //divide by 2, 
    for(let x = 2; x < n; x++){
        let push = true;
        if(x === 2) {
            primeArr.push(x)
            continue;
        }
        else{
            for(let i = 2; i < x; i++){
                if(x % i == 0){
                push = false;
                break
            }
            }
}
if(push === true){
    primeArr.push(x)
}

}
    return primeArr.length
}

//checking

console.log(countPrimes(100))
          //output should be 4: 2, 3, 5, 7, 11, 13, 17, 19, 23
console.log(countPrimes(0))

//0

console.log(countPrimes(1))
//0

console.log(countPrimes(4))
//2?

console.log(4%2)

