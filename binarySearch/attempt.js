//get a specific index in the the least amount of logs as possible

const search = (val, arr) => {
//naive, takes too long
    for(let x = 0; x < arr.length; x++){
        console.log(x)
        if(val === arr[x]){
            return x;
        }
    }

    return -1;
}

const binary = (val, arr) => {
    let lower = 0;
    let upper = arr.length-1;

    while(lower <= upper){
        console.log("try")
        const middle = lower + Math.floor((upper-lower) / 2) //gets middle index

        if(val === arr[middle]){
            return middle;
        }

        if(val < arr[middle]){
            upper = middle -1;  //if it's not middle, it reduces search from lower to middle -1 until found
        } else {
            lower = middle + 1;  //if it's not middle, it reduces search from middle + 1 to upper.
        }
    }

    return -1
}

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//console.log(search(7, values))

console.log(binary(6, values));