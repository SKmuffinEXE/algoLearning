learn.js
/* 

ref video - https://www.youtube.com/watch?v=2DmK_H7IdTo&ab_channel=MichaelSambol
heap: ordered binary tree
max heap: parent > child

build-max heap: creates max heap from unsorted array.

heapify: assumes part of the array is already sorted
*/

const values = [2, 8, 5, 3, 9, 1]

//create max heap, remove largest item, palce item in sorted partition

//values after max heap - [9, 8, 5, 3, 2, 1]

//swap 9 with 1 and remove 9 from array.