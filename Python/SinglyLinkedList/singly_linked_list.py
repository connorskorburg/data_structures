# create linked list with no built-in methods
# Create Node to add to list
class Node:
  def __init__(self, value):
    self.value = value
    self.next = None

# Create a Singly Linked List
class SinglyLinkedList:
  def __init__(self, value):
    self.head = Node(value)
  # add node to back of list
  def addToBack(self, value):
    runner = self.head
    while runner:
      if runner.next == None:
        runner.next = Node(value)
        break
      runner = runner.next
    return self
  # add node to front of list
  def addToFront(self, value):
    currentHead = self.head
    newHead = Node(value)
    self.head = Node(value)
    self.head.next = currentHead
    return self
  # remove node from back of list
  def removeBack(self):
    runner = self.head
    while runner:
      if runner.next.next == None:
        runner.next = None
      runner = runner.next
    return self
  # remove node from beginning of list
  def removeFront(self):
    self.head = self.head.next
    return self
  # insert value at specific index
  def insertValue(self, value, idx):
    runner = self.head
    i = 0
    while runner:
      if idx == 0:
        self.addToFront(value)
      else:
        if idx == i + 1:
          newNode = Node(value)
          next = runner.next
          runner.next = newNode
          newNode.next = next
          break
      i+=1
      runner = runner.next
    return self
  # remove value at specific index
  def removeIndex(self, idx):
    if idx < 0:
      return self
    else:
      runner = self.head
      i = 0;
      while runner:
        if idx == 0:
          self.removeFront()
          break
        else:
          if idx - 1 == i and runner.next != None:
            if runner.next.next != None:
              runner.next = runner.next.next
            else:
              runner.next = None
        i+=1
        runner = runner.next
      return self
  # remove first value given
  def removeValue(self, value):
    runner = self.head
    if runner.value == value:
      self.head = self.head.next
    while runner:
      if runner.next != None:
        if runner.next.value == value and runner.next.next != None:
          runner.next = runner.next.next
          break
        if runner.next.value == value and runner.next.next == None:
          runner.next = None
          break
      # if runner.next.value == val:
        # pass
      runner = runner.next
    return self
  # display nodes in list
  def printValues(self):
    runner = self.head
    i = 0
    arr = []
    while runner:
      node = runner
      arr.append(node.value)
      str = 'This is the current node {}, containing value {}, the next node is {},'.format(i, runner.value, runner.next)
      print(str)
      runner = node.next
      i += 1
    print(arr)
    return self
myList = SinglyLinkedList(10).addToBack(11).addToBack(12).addToBack(13).addToBack(14).printValues().addToFront(9).removeBack().printValues().removeFront().printValues().insertValue(100, 2).printValues().removeIndex(4).addToBack(16).printValues().removeValue(16).printValues()