# Bubble sort, swaps adjacent element if they are in the wrong order

def bubbleSort(list):
  for i in range(0, len(list)):
    for j in range(0, len(list) - 1):
      if list[j] > list[j + 1]:
        list[j], list[j + 1] = list[j + 1], list[j]
  print(i,j)
  return list
result = bubbleSort([1,5,6,8,3,6])
print(result)