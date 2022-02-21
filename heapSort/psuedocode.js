//this isn't fully functional, just psuedo code for reference

function HeapSort(array){
    BuildMaxHeap(array)
    for i = n to 1
    swap (A[1], A[i])
    n = n - 1
    Heapify(A,1)
}

function BuildMaxHeap(array) {
n = elements_in(array)
for i = floor(n/2) to 1
    Heapify(A, i)
}

function Heapify(array, i){

    let left = 2i;
    let right = 2i + 1;

    if(left <= n) && (array[left] > A[i])
        max = left;
        else
        max = i 

        if(right <= n) && (A[right] > A[max])
        max = right

        if(max != i)
            swap(a[i], A[max])
            Heapify(A,max)

}