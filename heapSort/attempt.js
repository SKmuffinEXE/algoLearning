
//left child: i * 2
//right child:  i * 2 + 1
//parent: floor(i/2)


const values = [20, 19, 17, 13, 15, 8, 5, 11, 9, 10]

const getPermutations = arr => {
    const output = [];
    //swaps function
    const swapInPlace = (arrToSwap, indexA, indexB) => {
        const temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB];
        arrToSwap[indexB] = temp;
    }

    const generate = (n, heapArr) => {
        if(n === 1) {
            output.push(heapArr.slice())
            return;
        }

        generate(n-1, heapArr);
        for(let i =0; i < n-1; i++){
            if(n % 2 === 0){
                swapInPlace(heapArr, i, n-1);
            }
            else{
                swapInPlace(heapArr, 0, n-1);
            }

            generate(n-1, heapArr);
        }
    };

    generate(arr.length, arr.slice());

    return output
}

console.log(getPermutations([1,2,3,4]))
/*

n is 3, heap is 123

g(3, 123)


n != 1

n -1
g(2, 123)

i is 0, i < n - 1; i++



*/