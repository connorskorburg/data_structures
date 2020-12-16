import unittest
from singly_linked_list import SinglyLinkedList
from singly_linked_list import Node


class TestSinglyLinkedList(unittest.TestCase):

  # test add to back method
  def testAddToBack(self):
    case_1 = self.list_1.addToBack(2)
    self.assertEqual(case_1.head.next.value, 2)
    
    case_2 = self.list_2.addToBack(4)
    self.assertEqual(case_2.head.next.value, 4)
    
    case_3 = self.list_3.addToBack('orange')
    self.assertEqual(case_3.head.next.value, 'orange')
    
    case_4 = self.list_4.addToBack()
    self.assertEqual(case_4.head.next, None)
    
    case_5 = self.list_5.addToBack(None)
    self.assertEqual(case_5.head.next, None)
    
  # test add to front method
  def testAddToFront(self):
    case_1 = self.list_1.addToFront(0)
    self.assertEqual(case_1.head.value, 0)
    
    case_2 = self.list_2.addToFront(10)
    self.assertEqual(case_2.head.value, 10)
    
    case_3 = self.list_3.addToFront('orange')
    self.assertEqual(case_3.head.value, 'orange')
    
    case_4 = self.list_4.addToFront()
    self.assertEqual(case_4.head.value, {'name':'Bob'})
    
    case_5 = self.list_5.addToFront(None)
    self.assertEqual(case_5.head.next, None)
    
  # test remove back method
  def testRemoveBack(self):
    case_1 = self.list_1.addToBack(2).addToBack(3).removeBack()
    self.assertEqual(case_1.head.next.value, 2)
    
    case_2 = self.list_2.addToBack(4).removeBack()
    self.assertEqual(case_2.head.next, None)
    
    case_3 = self.list_3.addToBack('orange').addToBack('guava').removeBack()
    self.assertEqual(case_3.head.next.value, 'orange')
    
    case_4 = self.list_4.removeBack()
    self.assertEqual(case_4.head.next, None)
    
    case_5 = self.list_5.addToBack(10).removeBack()
    self.assertEqual(case_5.head.next, None)
    
  # test remove front method
  def testRemoveFront(self):
    case_1 = self.list_1.addToBack(2).addToBack(3).removeFront()
    self.assertEqual(case_1.head.value, 2)
    
    case_2 = self.list_2.addToBack(4).removeFront()
    self.assertEqual(case_2.head.value, 4)
    
    case_3 = self.list_3.addToBack('orange').addToBack('guava').removeFront()
    self.assertEqual(case_3.head.value, 'orange')
    
    case_4 = self.list_4.removeFront()
    self.assertEqual(case_4.head.value, {'name':'Bob'})
    
    case_5 = self.list_5.addToBack(10).removeFront()
    self.assertEqual(case_5.head.value, 10)
    
  # test remove index method
  def testRemoveIndex(self):
    case_1 = self.list_1.addToBack(2).addToBack(3).addToBack(4).removeIndex(0)
    self.assertEqual(case_1.head.value, 2)
    
    case_2 = self.list_2.addToBack(4).addToBack(6).addToBack(8).removeIndex(2)
    self.assertEqual(case_2.head.next.next.value, 8)
    
    case_3 = self.list_3.addToBack('orange').addToBack('guava').removeIndex(4)
    self.assertEqual(case_3.head.next.next.next, None)
    
    case_4 = self.list_4.removeIndex(0)
    self.assertEqual(case_4.head.value, {'name':'Bob'})
    
    case_5 = self.list_5.addToBack(10).addToBack(20).removeIndex(2)
    self.assertEqual(case_5.head.next.next, None)
    
  # test remove value method
  def testRemoveValue(self):
    case_1 = self.list_1.addToBack(2).addToBack(3).addToBack(4).removeValue(3)
    self.assertEqual(case_1.head.next.next.next, None)
    
    case_2 = self.list_2.addToBack(4).addToBack(6).addToBack(8).removeValue(2)
    self.assertEqual(case_2.head.value, 4)
    
    case_3 = self.list_3.addToBack('orange').addToBack('guava').addToBack('pineapple').removeValue('guava')
    self.assertEqual(case_3.head.next.next.value, 'pineapple')
    
    case_4 = self.list_4.removeValue({'name': 'Jane'})
    self.assertEqual(case_4.head.value, {'name':'Bob'})
    
    case_5 = self.list_5.addToBack(10).addToBack(20).removeValue(None)
    self.assertEqual(case_5.head.value, 10)

  # set up method
  def setUp(self):
    print('Starting Singly Linked List Tests..\n\n')
    # set values
    self.list_1 = SinglyLinkedList(1)
    self.list_2 = SinglyLinkedList(2)
    self.list_3 = SinglyLinkedList('apple')
    self.list_4 = SinglyLinkedList({'name': 'Bob'})
    self.list_5 = SinglyLinkedList(None)
  # tear down method
  def tearDown(self):
    print('Finished tests.\n\n')
    # reset values
    self.list_1 = SinglyLinkedList(1)
    self.list_2 = SinglyLinkedList(2)
    self.list_3 = SinglyLinkedList('apple')
    self.list_4 = SinglyLinkedList({'name': 'Bob'})
    self.list_5 = SinglyLinkedList(None)


if __name__ == '__main__':
    unittest.main() # this runs our tests