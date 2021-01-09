'''
  https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen
  
  Function Description

  Complete the countingValleys function in the editor below.

    countingValleys has the following parameter(s):
      int steps: the number of steps on the hike
      string path: a string describing the path
'''

def counting_valleys(steps, path):
  count = 0
  level = 0
  for p in path:
    print('level:', level, 'count:', count)
    if p == 'U':
      level += 1
      if level == 0:
        count += 1
    else:
      level -= 1
  return count

res = counting_valleys(8, 'DDUUUUDD')
print(res)