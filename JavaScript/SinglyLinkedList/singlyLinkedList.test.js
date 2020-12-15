// testing singly linked list with jest

// cmd to test `npm test singlyLinkedList.test`

const SinglyLinkedList = require('./singlyLinkedList');

// classes for testing
const testSLLOne = new SinglyLinkedList();
const testSLLTwo = new SinglyLinkedList();
const testSLLThree = new SinglyLinkedList();
const testSLLFour = new SinglyLinkedList();
const testSLLFive = new SinglyLinkedList();
const testSLLSix = new SinglyLinkedList();

// reset variables for each test

const setVariables = _=> {
  testSLLOne.head = 1;
  testSLLTwo.head = 2;
  testSLLThree.head = 'banana';
  testSLLFour.head = {'name': 'john'};
  testSLLFive.head = [1,2,3,4];
  testSLLSix.head = null;
}

// set up
beforeEach(() => {
  setVariables();
});
// teardown
afterEach(() => {
  setVariables();
});

// test add to front method 
const addToFrontTests = _=> {
  // test #1
  test('Test Add To Front Method #1', () => {
    const result = testSLLOne.addToFront(0);
    expect(result.head.value).toEqual(0);
  });

  //test #2
  test('Test Add To Front Method #2', () => {
    const result = testSLLTwo.addToFront(0);
    expect(result.head.value).toEqual(0);
  });

  //test #3
  test('Test Add To Front Method #3', () => {
    const result = testSLLThree.addToFront('guava');
    expect(result.head.value).toEqual('guava');
  });

  //test #4
  test('Test Add To Front Method #4', () => {
    const result = testSLLFour.addToFront({ 'name': 'Jerry'});
    expect(result.head.value).toEqual({ 'name': 'Jerry'});
  });

  //test #5
  test('Test Add To Front Method #5', () => {
    const result = testSLLFive.addToFront(false);
    expect(result.head.value).toEqual(false);
  });

  //test #6
  test('Test Add To Front Method #6', () => {
    const result = testSLLSix.addToFront(null);
    expect(result.head.value).toEqual(null);
  });
}

addToFrontTests();