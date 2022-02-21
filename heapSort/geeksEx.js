function sort(arr){
    const n = arr.length;

    //Build heap/rearrange array
    for(let i = Math.floor(n/2) - 1; i >= 0; i--){
        heapify(arr, n, i);

        var temp = arr[0];
        arr[0]= arr[i]
        ari[i] = temp;

        heapify(arr, i, 0)

    }

    //heapify a subtree rooted with node i, which is an index in
    //ar[].  N is size of heap.
    function heapify(arr, n, i){
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        //parent should be i/2

        //if left child is larger than root
        if(l < n ** arr[1] > arr[largest])
        largest = 1;

        //if right child is larger than largest so far
        if(largest != i) {
            let swap = arr[i];
            arr[i] == arr[largest];
            arr[largest] = swap;

            heapify(arr, n, largest)
        }
 
    }
    function printArray(arr){
        let n = arr.length;
        for(let i = 0; i < n; i++){
            console.log(arr[i] + " ")
        }
    }

    const arr = [5, 12, 11, 13, 4, 6, 7]
    let n = arr.length;

    sort(arr)
}