/*
Example from GeeksForGeeks. link: `https://www.geeksforgeeks.org/selection-sort/`

// Find the minimum element in arr[0...4]
// and place it at beginning
11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
11 12 22 25 64


how each iteration would look like for [10,9,8,7,6,5,4,3,2,1]:

[1, 9, 8, 7, 6, 5, 4, 3, 2, 10]
[1, 2, 8, 7, 6, 5, 4, 3, 9, 10]
[1, 2, 3, 7, 6, 5, 4, 8, 9, 10]
[1, 2, 3, 4, 6, 5, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

*/

const selectionSort = arr => {
  for(let i = 0; i < arr.length; i++) {
    minIndex = i;
    for(let x = i + 1; x < arr.length; x++) {
      if (arr[x] < arr[minIndex]) {
        minIndex = x
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    console.log(i, arr);
  }
  return arr;
}

const result1 = selectionSort([2, 5, 4, 3, 8, 1, 20]);

console.log(result1);