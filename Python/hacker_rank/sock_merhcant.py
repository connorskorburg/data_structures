'''
  https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

Function Description

  Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

    sockMerchant has the following parameter(s):
      n: the number of socks in the pile
      ar: the colors of each sock
'''

def sockMerchant(n, ar):
  sockAmounts = {}
  for i in range(0, n):
    if ar[i] in sockAmounts.keys():
      sockAmounts[ar[i]] += 1
    else:
      sockAmounts[ar[i]] = 1
  res = 0
  for key,val in sockAmounts.items():  
    if val > 1:
      if val % 2 == 0:
        res += val / 2
      else:
        res += (val - 1) / 2
  return round(res)    
            
res = sockMerchant(9, [10,20,20,10,10,30,50,10,20])