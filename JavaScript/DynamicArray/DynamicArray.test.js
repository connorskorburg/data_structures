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

// tests for add to Front Method
const addToBackTests = _=> {
  // test #1
  test('Test Add To Front Method #1', () => {
    const result = testArrayOne.addToBack(7);
    expect(result.arr).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  
  //test #2
}

// run tests
addToFrontTests();
addToBackTests();
