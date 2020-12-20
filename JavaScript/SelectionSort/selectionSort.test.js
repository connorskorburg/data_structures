const { selectionSort } = require('./selectionSort');

// set up 
beforeEach(() => console.log('Running Selection Sort Tests...\n'));

// teardown 
afterEach(() => console.log('Finished Tests.'));

const selectionSortTest = _=> {
  test('Test 1', () => {
    const testCase = [10,9,8,7,6,5,4,3,2,1];
    const result = [1,2,3,4,5,6,7,8,9,10];
    expect(selectionSort(testCase)).toEqual(result);
  });
  test('Test 2', () => {
    const testCase = [3,5,2,10,0,2,4,3,2,1];
    const result = [0,1,2,2,2,3,3,4,5,10];
    expect(selectionSort(testCase)).toEqual(result);
  });
  test('Test 3', () => {
    const testCase = [100];
    const result = [100];
    expect(selectionSort(testCase)).toEqual(result);
  });
  test('Test 4', () => {
    const testCase = [10,8,6,4,2,0,-2,-4];
    const result = [-4,-2,0,2,4,6,8,10];
    expect(selectionSort(testCase)).toEqual(result);
  });
  test('Test 5', () => {
    const testCase = [1,2,3,4,5,6,7,10,8,9];
    const result = [1,2,3,4,5,6,7,8,9,10];
    expect(selectionSort(testCase)).toEqual(result);
  });
  test('Test 6', () => {
    const testCase = [];
    const result = [];
    expect(selectionSort(testCase)).toEqual(result);
  });
}

selectionSortTest();