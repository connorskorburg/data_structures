'''
    https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
'''

def repeatedString(s, n):
    count = s.count('a')
    z = 0
    for i in range(n % len(s)):
        if s[i] == 'a':
            z +=1
    print((n / len(s)) * count) + z
res = repeatedString('aba',10)
res = repeatedString('a',1000000000000)
