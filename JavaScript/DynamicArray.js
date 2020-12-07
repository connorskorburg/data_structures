/*
create dynamic array the can add / delete values to end, beginning, or specific location in array.Do not use any methods to help.Do everything in place without creating new arrays.
*/

class DynamicArray {
  constructor(arr = []) {
    this.arr = arr;
  }
  // add value to end of array
  addToBack = value => {
    this.arr[this.arr.length] = value;
    return this;
  }
  // add value to front of array
  addToFront = value => {
    for(let i = this.arr.length - 1; i >= 0; i--) {
      this.arr[i + 1] = this.arr[i];
    }
    this.arr[0] = value;
    return this;
  }
  // Remove last element from array
  removeBack = _=> {
    this.arr.length = this.arr.length - 1;
    return this;
  }
  // remove first element from array
  removeFront = _=> {
    for (let i = 0; i < this.arr.length; i ++) {
      this.arr[i] = this.arr[i + 1];
    }
    this.removeBack();
    return this;
  }
  // insert value at specific location in array
  insertAt = (value=null, idx=null) => {
    if(value === null || idx === null || idx > this.arr.length) {
      return this;
    } else if (idx === this.arr.length) {
      this.addToBack(value);
    } else if (idx === 0) {
      this.addToFront(value);
      return this;
    } else {
      this.arr[this.arr.length] = value;
      for (let i = this.arr.length - 2; i >= 0; i--) {
        console.log(i, this.arr[i]);
        if (i >= idx) {
          let temp = this.arr[i];
          this.arr[i] = this.arr[i + 1];
          this.arr[i + 1] = temp;
        }
      }
      return this;
    }
  }
}

const myArr = new DynamicArray([2,4,6,8,10]);
// myArr.addToBack(12).addToFront(0);
// myArr.addToFront(100)
// myArr.addToBack(12);
// myArr.removeBack();
// myArr.removeFront();
myArr.insertAt(100, 2);
console.log(myArr.arr);