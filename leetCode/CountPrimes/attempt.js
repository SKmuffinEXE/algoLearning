const countPrimes = (n) => {
    let primes = new Array(n).fill(true)
    for(let i = 2; i* i < primes.length; i++){
        if(primes[i]){
            for(let j = i; j * i < primes.length; j++){
                primes[i*j] = false
            }
        }
    }
    let primeCount = 0
    for(let i = 2; i < primes.length; i++){
        if(primes[i]){
            primeCount++
        }
    }
    return primeCount
}

console.log(countPrimes(10))