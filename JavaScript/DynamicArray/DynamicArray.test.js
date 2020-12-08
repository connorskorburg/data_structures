// testing dynamic array with jest

const DynamicArray = require('./DynamicArray');


// arrays for testing
const testArrayOne = new DynamicArray();
const testArrayTwo = new DynamicArray();
const testArrayThree = new DynamicArray();
const testArrayFour = new DynamicArray();
const testArrayFive = new DynamicArray();
const testArraySix = new DynamicArray();

// reset arr for each test
const setVariables = _=> {
  testArrayOne.arr = [1, 2, 3, 4, 5, 6];
  testArrayTwo.arr = [2, 4, 6, 8, 10, 12, 14];
  testArrayThree.arr = ['apple', 'banana', 'mango', 'grape', 'orange'];
  testArrayFour.arr = [{ 'name': 'John', 'age': 30 }, { 'name': 'Janet', 'age': 40 }, { 'name': 'Bob', 'age': 25 }];
  testArrayFive.arr = [true, false, 'True', 'False', 0, 1];
  testArraySix.arr = [];
}

// set up
beforeEach(() => {
  setVariables();
});
// teardown
afterEach(() => {
  setVariables();
});

// tests for add to Front Method
const addToFrontTests = _=> {
  // test #1
  test('Test Add To Front Method #1', () => {
    const result = testArrayOne.addToFront(0);
    expect(result.arr).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  //test #2
  test('Test Add To Front Method #2', () => {
    const result = testArrayTwo.addToFront(0);
    expect(result.arr).toEqual([0,2,4,6,8,10,12,14]);
  });

  //test #3
  test('Test Add To Front Method #3', () => {
    const result = testArrayThree.addToFront('guava');
    expect(result.arr).toEqual(['guava','apple', 'banana', 'mango', 'grape', 'orange']);
  });

  //test #4
  test('Test Add To Front Method #4', () => {
    const result = testArrayFour.addToFront({ 'name': 'Jerry', 'age': 50 });
    expect(result.arr).toEqual([{ 'name': 'Jerry', 'age': 50 }, { 'name': 'John', 'age': 30 }, { 'name': 'Janet', 'age': 40 }, { 'name': 'Bob', 'age': 25 }]);
  });

  //test #5
  test('Test Add To Front Method #5', () => {
    const result = testArrayFive.addToFront(false);
    expect(result.arr).toEqual([false,true, false, 'True', 'False', 0, 1]);
  });

  //test #6
  test('Test Add To Front Method #6', () => {
    const result = testArraySix.addToFront(100);
    expect(result.arr).toEqual([100]);
  });
}

// tests for add to Back Method
const addToBackTests = _=> {
  // test #1
  test('Test add To Back Method #1', () => {
    const result = testArrayOne.addToBack(7);
    expect(result.arr).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  //test #2
  test('Test add To Back Method #2', () => {
    const result = testArrayTwo.addToBack(16);
    expect(result.arr).toEqual([2,4,6,8,10,12,14,16]);
  });

  //test #3
  test('Test add To Back Method #3', () => {
    const result = testArrayThree.addToBack('pear');
    expect(result.arr).toEqual(['apple', 'banana', 'mango', 'grape', 'orange', 'pear']);
  });

  //test #4
  test('Test add To Back Method #4', () => {
    const result = testArrayFour.addToBack({ 'name': 'Sarah', 'age': 24 });
    expect(result.arr).toEqual([{ 'name': 'John', 'age': 30 }, { 'name': 'Janet', 'age': 40 }, { 'name': 'Bob', 'age': 25 }, { 'name': 'Sarah', 'age': 24 }]);
  });

  //test #5
  test('Test add To Back Method #5', () => {
    const result = testArrayFive.addToBack(true);
    expect(result.arr).toEqual([true, false, 'True', 'False', 0, 1, true]);
  });

  //test #6
  test('Test add To Back Method #6', () => {
    const result = testArraySix.addToBack(100);
    expect(result.arr).toEqual([100]);
  });
}

// tests for remove Back Method
const removeBackTests = _=> {
  // test #1
  test('Test Remove Back Method #1', () => {
    const result = testArrayOne.removeBack();
    expect(result.arr).toEqual([1, 2, 3, 4, 5]);
  });

  //test #2
  test('Test Remove Back Method #2', () => {
    const result = testArrayTwo.removeBack();
    expect(result.arr).toEqual([2,4,6,8,10,12]);
  });

  //test #3
  test('Test Remove Back Method #3', () => {
    const result = testArrayThree.removeBack();
    expect(result.arr).toEqual(['apple', 'banana', 'mango', 'grape']);
  });

  //test #4
  test('Test Remove Back Method #4', () => {
    const result = testArrayFour.removeBack();
    expect(result.arr).toEqual([{ 'name': 'John', 'age': 30 }, { 'name': 'Janet', 'age': 40 }]);
  });

  //test #5
  test('Test Remove Back Method #5', () => {
    const result = testArrayFive.removeBack();
    expect(result.arr).toEqual([true, false, 'True', 'False', 0]);
  });

  //test #6
  test('Test Remove Back Method #6', () => {
    const result = testArraySix.removeBack();
    expect(result.arr).toEqual([]);
  });
}

// tests for remove Front Method
const removeFrontTests = _=> {
  // test #1
  test('Test Remove Front Method #1', () => {
    const result = testArrayOne.removeFront();
    expect(result.arr).toEqual([2, 3, 4, 5, 6]);
  });

  //test #2
  test('Test Remove Front Method #2', () => {
    const result = testArrayTwo.removeFront();
    expect(result.arr).toEqual([4,6,8,10,12,14]);
  });

  //test #3
  test('Test Remove Front Method #3', () => {
    const result = testArrayThree.removeFront();
    expect(result.arr).toEqual(['banana', 'mango', 'grape', 'orange']);
  });

  //test #4
  test('Test Remove Front Method #4', () => {
    const result = testArrayFour.removeFront();
    expect(result.arr).toEqual([{ 'name': 'Janet', 'age': 40 }, { 'name': 'Bob', 'age': 25 }]);
  });

  //test #5
  test('Test Remove Front Method #5', () => {
    const result = testArrayFive.removeFront();
    expect(result.arr).toEqual([false, 'True', 'False', 0, 1]);
  });

  //test #6
  test('Test Remove Front Method #6', () => {
    const result = testArraySix.removeFront();
    expect(result.arr).toEqual([]);
  });
}

// tests for Insert Method
const insertAtTests = _ => {
  // test #1
  test('Test Insert At Method #1', () => {
    const result = testArrayOne.insertAt(100, 4);
    expect(result.arr).toEqual([1, 2, 3, 4, 100, 5, 6]);
  });

  //test #2
  test('Test Insert At Method #2', () => {
    const result = testArrayTwo.insertAt('3', 1);
    expect(result.arr).toEqual([2, "3" ,4, 6, 8, 10, 12, 14]);
  });

  //test #3
  test('Test Insert At Method #3', () => {
    const result = testArrayThree.insertAt('grapefruit');
    expect(result.arr).toEqual(['apple', 'banana', 'mango', 'grape', 'orange']);
  });

  //test #4
  test('Test Insert At Method #4', () => {
    const result = testArrayFour.insertAt({ 'name': 'Sarah', 'age': 24 }, 1);
    expect(result.arr).toEqual([{ 'name': 'John', 'age': 30 }, { 'name': 'Sarah', 'age': 24 }, { 'name': 'Janet', 'age': 40 }, { 'name': 'Bob', 'age': 25 }]);
  });

  //test #5
  test('Test Insert At Method #5', () => {
    const result = testArrayFive.insertAt(true, 10);
    expect(result.arr).toEqual([true, false, 'True', 'False', 0, 1]);
  });

  //test #6
  test('Test Insert At Method #6', () => {
    const result = testArraySix.insertAt(100, 2);
    expect(result.arr).toEqual([]);
  });
}

// tests for Remove Index Method
const removeIndexTests = _ => {
  // test #1
  test('Test Remove Index Method #1', () => {
    const result = testArrayOne.removeIndex(4);
    expect(result.arr).toEqual([1, 2, 3, 4, 6]);
  });

  //test #2
  test('Test Remove Index Method #2', () => {
    const result = testArrayTwo.removeIndex(1);
    expect(result.arr).toEqual([2, 6, 8, 10, 12, 14]);
  });

  //test #3
  test('Test Remove Index Method #3', () => {
    const result = testArrayThree.removeIndex(2);
    expect(result.arr).toEqual(['apple', 'banana', 'grape', 'orange']);
  });

  //test #4
  test('Test Remove Index Method #4', () => {
    const result = testArrayFour.removeIndex(-1);
    expect(result.arr).toEqual([{ 'name': 'John', 'age': 30 }, { 'name': 'Janet', 'age': 40 }, { 'name': 'Bob', 'age': 25 }]);
  });

  //test #5
  test('Test Remove Index Method #5', () => {
    const result = testArrayFive.removeIndex(100);
    expect(result.arr).toEqual([true, false, 'True', 'False', 0, 1]);
  });

  //test #6
  test('Test Remove Index Method #6', () => {
    const result = testArraySix.removeIndex(10);
    expect(result.arr).toEqual([]);
  });
}

// run tests
addToFrontTests();
addToBackTests();
removeBackTests();
removeFrontTests();
insertAtTests();
removeIndexTests();