var romanToInt = function(s) {
    //1) loop through s
    //2) if i is 0, and the value is 'I', check I[1]
    let ans = 0;


    for(let i = 0; i<s.length; i++){
        if(s[i]=== 'I'){
            ans += 1
        }
        if(s[i] === 'V')
            {ans+=5
                if(s[i-1] === 'I')
                    ans-=2
            }
        if(s[i] === 'X'){
            ans+= 10
            if(s[i-1] === 'I')
                ans-=2
        }
        if(s[i] === 'L'){
            ans += 50
            if(s[i-1] === 'X')
                ans -= 20
        }
        if(s[i] === 'C'){
            ans += 100
            if(s[i-1] === "X")
                ans-=20
        }
        if(s[i] === 'D'){
            ans+= 500;
            if(s[i-1] === 'C')
                ans-= 200
        }

        if(s[i] === 'M'){
            ans += 1000
            if(s[i-1] === 'C')
            ans-= 200
        }

    }
    return ans;
};
console.log(romanToInt('CD'))

console.log(romanToInt('III'))
//3
console.log(romanToInt('LVIII'))
//58
console.log(romanToInt('MCMXCIV'))
//1994