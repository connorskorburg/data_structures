import unittest
from dynamic_array import DynamicArray

class TestDynamicArray(unittest.TestCase):

  # test add to back method
  def testAddToBack(self):
    case_1 = self.test_1.addToBack(12).arr 
    res_1 = [2,4,6,8,10,12]

    case_2 = self.test_2.addToBack(10).arr 
    res_2 = [1,2,3,4,5,6,7,8,9,10]

    case_3 = self.test_3.addToBack('pear').arr 
    res_3 = ['apple','banana','mango','grape','orange', 'pear']

    case_4 = self.test_4.addToBack({'name': 'Sarah', 'age': 24}).arr 
    res_4 = [{'name': 'John','age': 30},{'name': 'Janet','age': 40},{'name': 'Bob','age': 25},{'name': 'Sarah','age': 24}]

    case_5 = self.test_5.addToBack(True).arr 
    res_5 = [True, False, 'True', 'False', 0, 1, True]

    case_6 = self.test_6.addToBack(12).arr
    res_6 = [12]
    
    self.assertEqual(case_1, res_1)
    self.assertEqual(case_2, res_2)
    self.assertEqual(case_3, res_3)
    self.assertEqual(case_4, res_4)
    self.assertEqual(case_5, res_5)
    self.assertEqual(case_6, res_6)

  # test add to front method
  def testAddToFront(self):
    case_1 = self.test_1.addToFront(0).arr 
    res_1 = [0,2,4,6,8,10]

    case_2 = self.test_2.addToFront(0).arr 
    res_2 = [0,1,2,3,4,5,6,7,8,9]

    case_3 = self.test_3.addToFront('guava').arr 
    res_3 = ['guava','apple','banana','mango','grape','orange']

    case_4 = self.test_4.addToFront({'name': 'Jerry', 'age': 50}).arr 
    res_4 = [{'name': 'Jerry', 'age': 50},{'name': 'John','age': 30},{'name': 'Janet','age': 40},{'name': 'Bob','age': 25}]

    case_5 = self.test_5.addToFront(False).arr 
    res_5 = [False, True, False, 'True', 'False', 0, 1]

    case_6 = self.test_6.addToFront(24).arr
    res_6 = [24]
    
    self.assertEqual(case_1, res_1)
    self.assertEqual(case_2, res_2)
    self.assertEqual(case_3, res_3)
    self.assertEqual(case_4, res_4)
    self.assertEqual(case_5, res_5)
    self.assertEqual(case_6, res_6)

  # test add to remove back method
  def testRemoveBack(self):
    case_1 = self.test_1.removeBack().arr 
    res_1 = [2,4,6,8]

    case_2 = self.test_2.removeBack().arr 
    res_2 = [1,2,3,4,5,6,7,8]

    case_3 = self.test_3.removeBack().arr 
    res_3 = ['apple','banana','mango','grape']

    case_4 = self.test_4.removeBack().arr 
    res_4 = [{'name': 'John','age': 30},{'name': 'Janet','age': 40}]

    case_5 = self.test_5.removeBack().arr 
    res_5 = [True, False, 'True', 'False', 0]

    case_6 = self.test_6.removeBack().arr
    res_6 = []
    
    self.assertEqual(case_1, res_1)
    self.assertEqual(case_2, res_2)
    self.assertEqual(case_3, res_3)
    self.assertEqual(case_4, res_4)
    self.assertEqual(case_5, res_5)
    self.assertEqual(case_6, res_6)

  # test add to remove front method
  def testRemoveFront(self):
    case_1 = self.test_1.removeFront().arr 
    res_1 = [4,6,8,10]

    case_2 = self.test_2.removeFront().arr 
    res_2 = [2,3,4,5,6,7,8,9]

    case_3 = self.test_3.removeFront().arr 
    res_3 = ['banana','mango','grape','orange']

    case_4 = self.test_4.removeFront().arr 
    res_4 = [{'name': 'Janet','age': 40},{'name': 'Bob','age': 25}]

    case_5 = self.test_5.removeFront().arr 
    res_5 = [False, 'True', 'False', 0, 1]

    case_6 = self.test_6.removeFront().arr
    res_6 = []
    
    self.assertEqual(case_1, res_1)
    self.assertEqual(case_2, res_2)
    self.assertEqual(case_3, res_3)
    self.assertEqual(case_4, res_4)
    self.assertEqual(case_5, res_5)
    self.assertEqual(case_6, res_6)

  # test insert value method
  def testInsertValue(self):
    case_1 = self.test_1.insertValue(100, 3).arr 
    res_1 = [2,4,6,100,8,10]

    case_2 = self.test_2.insertValue(555, 5).arr 
    res_2 = [1,2,3,4,5,555,6,7,8,9]

    case_3 = self.test_3.insertValue('pineapple', 4).arr 
    res_3 = ['apple','banana','mango','grape','pineapple','orange']

    case_4 = self.test_4.insertValue({'name': 'Barb','age':60}, 2).arr 
    res_4 = [{'name': 'John','age': 30},{'name': 'Janet','age': 40},{'name': 'Barb','age': 60},{'name': 'Bob','age': 25}]

    case_5 = self.test_5.insertValue(False, 4).arr 
    res_5 = [True, False, 'True', 'False', False, 0, 1]

    case_6 = self.test_6.insertValue().arr
    res_6 = []
    
    self.assertEqual(case_1, res_1)
    self.assertEqual(case_2, res_2)
    self.assertEqual(case_3, res_3)
    self.assertEqual(case_4, res_4)
    self.assertEqual(case_5, res_5)
    self.assertEqual(case_6, res_6)

  # test remove index method
  def testRemoveIndex(self):
    case_1 = self.test_1.removeIndex(3).arr 
    res_1 = [2,4,6,10]

    case_2 = self.test_2.removeIndex(5).arr 
    res_2 = [1,2,3,4,5,7,8,9]

    case_3 = self.test_3.removeIndex(4).arr 
    res_3 = ['apple','banana','mango','grape']

    case_4 = self.test_4.removeIndex(1).arr 
    res_4 = [{'name': 'John','age': 30},{'name': 'Bob','age': 25}]

    case_5 = self.test_5.removeIndex(10).arr 
    res_5 = [True, False, 'True', 'False', 0, 1]

    case_6 = self.test_6.removeIndex(100).arr
    res_6 = []
    
    self.assertEqual(case_1, res_1)
    self.assertEqual(case_2, res_2)
    self.assertEqual(case_3, res_3)
    self.assertEqual(case_4, res_4)
    self.assertEqual(case_5, res_5)
    self.assertEqual(case_6, res_6)

  # test remove value method
  def testRemoveValue(self):
    case_1 = self.test_1.removeValue(8).arr 
    res_1 = [2,4,6,10]

    case_2 = self.test_2.removeValue(4).arr 
    res_2 = [1,2,3,5,6,7,8,9]

    case_3 = self.test_3.removeValue('mango').arr 
    res_3 = ['apple','banana','grape','orange']

    case_4 = self.test_4.removeValue({'name': 'Janet', 'age': 40}).arr 
    res_4 = [{'name': 'John','age': 30},{'name': 'Bob','age': 25}]

    case_5 = self.test_5.removeValue('False').arr 
    res_5 = [True, False, 'True',0, 1]

    case_6 = self.test_6.removeValue().arr
    res_6 = []
    
    self.assertEqual(case_1, res_1)
    self.assertEqual(case_2, res_2)
    self.assertEqual(case_3, res_3)
    self.assertEqual(case_4, res_4)
    self.assertEqual(case_5, res_5)
    self.assertEqual(case_6, res_6)

  # any task you want run before any method above is executed, put them in the setUp method
  def setUp(self):
    # add the setUp tasks
    print("running setUp")
    # set values
    self.test_1 = DynamicArray([2,4,6,8,10])
    self.test_2 = DynamicArray([1,2,3,4,5,6,7,8,9])
    self.test_3 = DynamicArray(['apple','banana','mango','grape','orange'])
    self.test_4 = DynamicArray([{'name': 'John','age': 30},{'name': 'Janet','age': 40},{'name': 'Bob','age': 25},])
    self.test_5 = DynamicArray([True, False, 'True', 'False', 0, 1])
    self.test_6 = DynamicArray([])
  # any task you want run after the tests are executed, put them in the tearDown method
  def tearDown(self):
    # add the tearDown tasks
    print("running tearDown tasks")
    # reset values
    self.test_1 = DynamicArray([2,4,6,8,10])
    self.test_2 = DynamicArray([1,2,3,4,5,6,7,8,9])
    self.test_3 = DynamicArray(['apple','banana','mango','grape','orange'])
    self.test_4 = DynamicArray([{'name': 'John','age': 30},{'name': 'Janet','age': 40},{'name': 'Bob','age': 25},])
    self.test_5 = DynamicArray([True, False, 'True', 'False', 0, 1])
    self.test_6 = DynamicArray([])
if __name__ == '__main__':
    unittest.main() # this runs our tests