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
  insertAt = (value, idx=null) => {
    if(value === undefined || idx === null || idx > this.arr.length) {
      return this;
    } else if (idx === this.arr.length) {
      this.addToBack(value);
    } else if (idx === 0) {
      this.addToFront(value);
      return this;
    } else {
      this.arr[this.arr.length] = value;
      for (let i = this.arr.length - 2; i >= 0; i--) {
        if (i >= idx) {
          let temp = this.arr[i];
          this.arr[i] = this.arr[i + 1];
          this.arr[i + 1] = temp;
        }
      }
      return this;
    }
  }
  // remove value at index
  removeIndex(idx=null){
    if(idx === null || idx >= this.arr.length || idx < 0){
      return this;
    } else if (idx === 0) {
      this.removeFront();
    } else if (idx === this.arr.length - 1) {
      this.removeBack()
    } else {
      for (let i = 0; i < this.arr.length; i++) {
        if (i >= idx) {
          this.arr[i] = this.arr[i + 1];
        }
      }
      this.removeBack();
      return this;
    }
  }
  // remove first value that matches value given
  removeValue = (value) => {
    if (value === undefined) {
      return this;
    } else {
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] === value) {
          this.removeIndex(i);
          break;
        }
      }
    }
    return this;
  }
}

// const myArr = new DynamicArray([1,2,3,4,5,6,7]);

// myArr.addToBack(7);
// console.log(myArr.arr);

module.exports = DynamicArray;