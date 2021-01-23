'''
    https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

    There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

    Example
        n =7
        ar = [1,2,1,2,1,3,2]
        There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

    Function Description
        Complete the sockMerchant function in the editor below.
        sockMerchant has the following parameter(s):
            int n: the number of socks in the pile
            int ar[n]: the colors of each sock
            
    Returns
        int: the number of pairs
        
    Input Format
        The first line contains an integer , the number of socks represented in .
        The second line contains  space-separated integers, , the colors of the socks in the pile.

    STDIN                       Function
    -----                       --------
    9                           n = 9
    10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    
    Sample Output
    3

'''

# find sales by matching socks pairs
def sockMerchant(n, arr):
    sales = {}
    count = 0
    for i in range(0, n):
        if arr[i] in sales.keys():
            count += 1
            sales.pop(arr[i], None)
        else:
            sales[arr[i]] = 1
    return int(count)
            
    
res = sockMerchant(9, [10,20,20,10,10,30,50,10,20])
print(res)