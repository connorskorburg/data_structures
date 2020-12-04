/*
create dynamic array the can add / delete values to end, beginning, or specific location in array.Do not use any methods to help.Do everything in place without creating new arrays.
*/

class DynamicArray {
  constructor(arr = []) {
    this.arr = arr;
  }
  addToBack = value => {
    this.arr[this.arr.length] = value;
    return this;
  }
  addToFront = value => {
    for(let i = this.arr.length; i >= 0; i--) {
      this.arr[i] = this.arr[i + 1];
    }
    this.arr[0] = value;
    return this;
  }
  // This also works 
  // addToFront = value => {
  //   for(let i = this.arr.length; i >= 0; i--) {
  //     this.arr[i] = i === 0 ? value : this.arr[i - 1];
  //   }
  //   return this;
  // }
}

const myArr = new DynamicArray([2,4,6,8,10]);
// myArr.addToBack(12).addToFront(0);
myArr.addToBack(12);
console.log(myArr.arr);