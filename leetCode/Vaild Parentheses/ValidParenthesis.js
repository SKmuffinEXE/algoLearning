var isValid = function(s) {
let stack = []
for(let ch of s){
    if(ch === "(" || ch === "{" || ch === "[")
        stack.push(ch)
    else{
        let tmp = stack.pop()
        switch(ch){
            case ')':
                if(tmp != "(")
                return false
                break;
        case '}':
            if(tmp != "{")
                return false
            break
        case ']':
            if(tmp != "[")
                return false
            break
        }}}
return stack == 0
};










let s3 = "(]"
console.log(isValid(s3))
//false
let s2 = "()[]{}"
console.log(isValid(s2))
//true
let s1 = "()"
console.log(isValid(s1))
//true
let s4 = "([])"
console.log(isValid(s4))
//true