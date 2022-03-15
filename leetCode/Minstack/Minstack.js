class MinStack {
    constructor(){
        this.stack = []
        this.min = []
    }

    push(val){
        this.stack.push(val)
        if(!this.min.length){
            
            this.min.push(val)
        }else{
            this.min.push(Math.min(this.min[this.min.length-1], val))
        }

    }

    pop(){
        if(!this.stack.length) return null;
        this.min.pop()
        return this.stack.pop()
    }

    top(){
        return this.stack[this.stack.length-1]
    }

    getMin(){
        return this.min[this.min.length-1]
    }
}

const test = new minStack([[],[-2],[0],[-3],[],[],[],[]])

console.log(test)