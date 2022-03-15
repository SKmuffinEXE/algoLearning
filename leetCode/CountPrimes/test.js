const  countPrimes = (n) => {
    let nums = new Array(n).fill(true);
    let primeCount = 0;
    for (let i = 2; i * i < n; i++) {
        if (nums[i]) {
            for (let j = i; j * i < n; j++) {
                nums[j * i] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (nums[i]) primeCount++;
    }

    return primeCount;
};

console.log(countPrimes(10))

/*
2
22 = 4
23 = 6
24 = 8
25 = 10 X
3
33 = 9
34 = 12 X
*/