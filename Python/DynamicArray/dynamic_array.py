# create dynamic array the can add/delete values to end, beginning, or specific location in array. Do not use any methods to help. Do everything in place without creating new arrays.

class DynamicArray:
  def __init__(self, arr = []):
    self.arr = arr
  # append value to end of array
  def addToBack(self, value):
    self.arr[len(self.arr):] = [value]
    return self
  # prepend value to beginning of array
  def addToFront(self, value):
    self.arr[:0] = [value]
    return self
  # remove back of array
  def removeBack(self):
    self.arr = self.arr[:(len(self.arr) - 1)]
    return self
  # remove front of array
  def removeFront(self):
    self.arr = self.arr[1:len(self.arr)]
    return self
  # insert value at specific location
  def insertValue(self, value=None, idx=None):
    if idx == None:
      return self
    if idx > len(self.arr) or value == None:
      return self
    elif idx == len(self.arr):
      self.addToBack(value)
      return self
    else:
      self.arr = self.arr[:idx] + [value] + self.arr[idx:]
      return self
  # remove value at idx recieved
  def removeIndex(self, idx=None):
    if idx > len(self.arr) or idx == None:
      return self
    elif idx == (len(self.arr) - 1):
      self.removeBack()
      return self
    elif idx == 0:
      self.removeFront()
      return self
    else:
      self.arr = self.arr[:idx] + self.arr[idx + 1:]
      return self
  # remove first value that matches value given
  def removeValue(self, value=None):
    if value == None:
      return self
    for i in range(0, len(self.arr)):
      if self.arr[i] == value:
        self.removeIndex(i)
        break
    return self
