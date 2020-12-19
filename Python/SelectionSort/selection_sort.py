'''
Example from GeeksForGeeks. link: `https://www.geeksforgeeks.org/selection-sort/`

// Find the minimum element in arr[0...4]
// and place it at beginning
11 25 12 22 64

// Find the minimum element in arr[1...4]
// and place it at beginning of arr[1...4]
11 12 25 22 64

// Find the minimum element in arr[2...4]
// and place it at beginning of arr[2...4]
11 12 22 25 64

// Find the minimum element in arr[3...4]
// and place it at beginning of arr[3...4]
11 12 22 25 64


how each iteration would look like for [10,9,8,7,6,5,4,3,2,1]:

[1, 9, 8, 7, 6, 5, 4, 3, 2, 10]
[1, 2, 8, 7, 6, 5, 4, 3, 9, 10]
[1, 2, 3, 7, 6, 5, 4, 8, 9, 10]
[1, 2, 3, 4, 6, 5, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

'''

def selectionSort(arr):
  for i in range(0, len(arr)):
    minIndex = i
    for x in range(i + 1, len(arr)):
      if arr[x] < arr[i]:
        minIndex = x
    arr[i], arr[minIndex] = arr[minIndex], arr[i]
  return arr

result1 = selectionSort([2,5,4,3,8,1,20])
result2 = selectionSort([10,9,8,7,6,5,4,3,2,1])
print(result1)
print(result2)