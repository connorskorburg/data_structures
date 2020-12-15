// Bubble sort, swaps adjacent element if they are in the wrong order

const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const result = bubbleSort([4,2,5,6,3,9,1,8,7]);
console.log(result);