// testing singly linked list with jest

// cmd to test `npm test singlyLinkedList.test`

const {SinglyLinkedList, Node} = require('./singlyLinkedList');

// classes for testing
const testSLLOne = new SinglyLinkedList();
const testSLLTwo = new SinglyLinkedList();
const testSLLThree = new SinglyLinkedList();
const testSLLFour = new SinglyLinkedList();
const testSLLFive = new SinglyLinkedList();
const testSLLSix = new SinglyLinkedList();

// reset variables for each test

const setVariables = _=> {
  testSLLOne.head = new Node(1);
  testSLLTwo.head = new Node(2);
  testSLLThree.head = new Node('banana');
  testSLLFour.head = new Node({'name': 'john'});
  testSLLFive.head = new Node([1,2,3,4]);
  testSLLSix.head = new Node(null);
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
  test('Test Add To Front Method #6\n\n', () => {
    const result = testSLLSix.addToFront(null);
    expect(result.head.value).toEqual(null);
  });
}

// test add to back method 
const addToBackTests = _=> {
  // test #1
  test('Test Add To Back Method #1', () => {
    const result = testSLLOne.addToBack(2);
    expect(result.head.next.value).toEqual(2);
  });

  //test #2
  test('Test Add To Back Method #2', () => {
    const result = testSLLTwo.addToBack(4);
    expect(result.head.next.value).toEqual(4);
  });

  //test #3
  test('Test Add To Back Method #3', () => {
    const result = testSLLThree.addToBack('orange');
    expect(result.head.next.value).toEqual('orange');
  });

  //test #4
  test('Test Add To Back Method #4', () => {
    const result = testSLLFour.addToBack({ 'name': 'Amy'});
    expect(result.head.next.value).toEqual({ 'name': 'Amy'});
  });

  //test #5
  test('Test Add To Back Method #5', () => {
    const result = testSLLFive.addToBack([2,4,6,8]);
    expect(result.head.next.value).toEqual([2,4,6,8]);
  });

  //test #6
  test('Test Add To Back Method #6\n\n', () => {
    const result = testSLLSix.addToBack(null);
    expect(result.head.next.value).toEqual(null);
  });
}

// test remove back method 
const removeBackTests = _=> {
  // test #1
  test('Test Remove Back Method #1', () => {
    const result = testSLLOne.addToBack(2).removeBack();
    expect(result.head.value).toEqual(1);
  });

  //test #2
  test('Test Remove Back Method #2', () => {
    const result = testSLLTwo.addToBack(4).removeBack();
    expect(result.head.value).toEqual(2);
  });

  //test #3
  test('Test Remove Back Method #3', () => {
    const result = testSLLThree.addToBack('orange').removeBack();
    expect(result.head.value).toEqual('banana');
  });

  //test #4
  test('Test Remove Back Method #4', () => {
    const result = testSLLFour.addToBack({ 'name': 'Amy'}).removeBack();
    expect(result.head.value).toEqual({ 'name': 'john'});
  });

  //test #5
  test('Test Remove Back Method #5', () => {
    const result = testSLLFive.addToBack([2,4,6,8]).removeBack();
    expect(result.head.value).toEqual([1,2,3,4]);
  });

  //test #6
  test('Test Remove Back Method #6\n\n', () => {
    const result = testSLLSix.addToBack(null).removeBack();
    expect(result.head.value).toEqual(null);
  });
}

// test remove front method 
const removeFrontTests = _=> {
  // test #1
  test('Test Remove Front Method #1', () => {
    const result = testSLLOne.addToBack(2).removeFront();
    expect(result.head.value).toEqual(2);
  });

  //test #2
  test('Test Remove Front Method #2', () => {
    const result = testSLLTwo.addToBack(4).removeFront();
    expect(result.head.value).toEqual(4);
  });

  //test #3
  test('Test Remove Front Method #3', () => {
    const result = testSLLThree.addToBack('orange').removeFront();
    expect(result.head.value).toEqual('orange');
  });

  //test #4
  test('Test Remove Front Method #4', () => {
    const result = testSLLFour.addToBack({ 'name': 'Amy'}).removeFront();
    expect(result.head.value).toEqual({ 'name': 'Amy'});
  });

  //test #5
  test('Test Remove Front Method #5', () => {
    const result = testSLLFive.addToBack([2,4,6,8]).removeFront();
    expect(result.head.value).toEqual([2,4,6,8]);
  });

  //test #6
  test('Test Remove Front Method #6\n\n', () => {
    const result = testSLLSix.addToBack(null).removeFront();
    expect(result.head.value).toEqual(null);
  });
}

// test insert value front method 
const insertValueTests = _=> {
  // test #1
  test('Test Insert Value Method #1', () => {
    const result = testSLLOne.addToBack(2).addToBack(4).addToBack(5).insertValue(3, 2);
    expect(result.head.next.next.value).toEqual(3);
  });

  //test #2
  test('Test Insert Value Method #2', () => {
    const result = testSLLTwo.addToBack(4).addToBack(6).addToBack(8).insertValue(10,4);
    expect(result.head.next.next.next.next.value).toEqual(10);
  });

  //test #3
  test('Test Insert Value Method #3', () => {
    const result = testSLLThree.addToBack('orange').insertValue('pineapple', 1);
    expect(result.head.next.value).toEqual('pineapple');
  });

  //test #4
  test('Test Insert Value Method #4', () => {
    const result = testSLLFour.addToBack({ 'name': 'Amy'}).insertValue({'name': 'Bob'}, 0);
    expect(result.head.value).toEqual({ 'name': 'Bob'});
  });

  //test #5
  test('Test Insert Value Method #5', () => {
    const result = testSLLFive.addToBack([2,4,6,8]).addToBack([1,2,3,4]).addToBack([5,6,7,8,9]).insertValue([10,9,8,7,6], 4);
    expect(result.head.next.next.next.next.value).toEqual([10,9,8,7,6]);
  });

  //test #6
  test('Test Insert Value Method #6\n\n', () => {
    const result = testSLLSix.addToBack(null).insertValue(10);
    expect(result.head.value).toEqual(null);
  });
}

// test remove index front method 
const removeIndexTests = _ => {
  // test #1
  test('Test Remove Index Method #1', () => {
    const result = testSLLOne.addToBack(2).addToBack(4).addToBack(5).addToBack(3).removeIndex(2);
    expect(result.head.next.next.value).toEqual(5);
  });

  //test #2
  test('Test Remove Index Method #2', () => {
    const result = testSLLTwo.addToBack(4).addToBack(6).addToBack(8).addToBack(10).addToBack(12).removeIndex(2);
    expect(result.head.next.next.value).toEqual(8);
  });

  //test #3
  test('Test Remove Index Method #3', () => {
    const result = testSLLThree.addToBack('orange').addToBack('pineapple').removeIndex(0);
    expect(result.head.value).toEqual('orange');
  });

  //test #4
  test('Test Remove Index Method #4', () => {
    const result = testSLLFour.addToBack({ 'name': 'Amy' }).addToBack({ 'name': 'Bob' }).removeIndex(1);
    expect(result.head.next.value).toEqual({ 'name': 'Bob' });
  });

  //test #5
  test('Test Remove Index Method #5', () => {
    const result = testSLLFive.addToBack([2, 4, 6, 8]).addToBack([1, 2, 3, 4]).addToBack([5, 6, 7, 8, 9]).removeIndex(3);
    expect(result.head.next.next.next).toEqual(null);
  });

  //test #6
  test('Test Remove Index Method #6\n\n', () => {
    const result = testSLLSix.addToBack(null).addToBack(10).removeIndex(1);
    expect(result.head.next.value).toEqual(10);
  });
}

// test remove value front method 
const removeValueTests = _ => {
  // test #1
  test('Test Remove Value Method #1', () => {
    const result = testSLLOne.addToBack(2).addToBack(4).addToBack(5).addToBack(3).removeValue(2);
    expect(result.head.next.value).toEqual(4);
  });

  //test #2
  test('Test Remove Value Method #2', () => {
    const result = testSLLTwo.addToBack(4).addToBack(6).addToBack(8).addToBack(10).addToBack(12).removeValue(4);
    expect(result.head.next.value).toEqual(6);
  });

  //test #3
  test('Test Remove Value Method #3', () => {
    const result = testSLLThree.addToBack('orange').addToBack('pineapple').removeValue('pineapple');
    expect(result.head.next.next).toEqual(null);
  });

  //test #4
  test('Test Remove Value Method #4', () => {
    const result = testSLLFour.addToBack({ 'name': 'Amy' }).addToBack({ 'name': 'Bob' }).removeValue({'name': 'john'});
    expect(result.head.next.value).toEqual({ 'name': 'Amy' });
  });

  //test #5
  test('Test Remove Value Method #5', () => {
    const result = testSLLFive.addToBack([2, 4, 6, 8]).addToBack([1, 2, 3, 4]).addToBack([5, 6, 7, 8, 9]).removeValue([2,4,6,8]);
    expect(result.head.next.next.next.next).toEqual(null);
  });

  //test #6
  test('Test Remove Value Method #6\n\n', () => {
    const result = testSLLSix.addToBack(null).addToBack(10).removeValue(null);
    expect(result.head.next.value).toEqual(10);
  });
}

addToFrontTests();
addToBackTests();
removeBackTests();
removeFrontTests();
insertValueTests();
removeIndexTests();
removeValueTests();