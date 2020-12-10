# create linked list with no built-in methods

class Node:
  def __init__(self, value):
    self.value = value
    self.next = None

class SinglyLinkedList:
  def __init__(self, value):
    self.head = Node(value)
  def addToBack(self, value):
    runner = self.head
    while runner:
      if runner.next == None:
        runner.next = Node(value)
        break
      runner = runner.next
    return self
  # def addToFront(self, value):
  #   runner = self.head
  #   head = Node(value)
  #   i = 0
  #   while runner:
  #     print(i)
  #     print(runner.next)
  #     print(runner.next.next)
  #     i+=1
  #     runner = runner.next
  #   return self
  def printValues(self):
    runner = self.head
    i = 0
    while runner:
      node = runner
      str = 'This is the current node {}, containing value {}, the next node is {},'.format(i, runner.value, runner.next)
      print(str)
      runner = node.next
      i += 1
    return self
myList = SinglyLinkedList(10).addToBack(11).addToBack(12).addToBack(13).addToBack(14).printValues().addToFront(9).printValues()