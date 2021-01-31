'''
https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.


Function Description

  Complete the jumpingOnClouds function in the editor below.
    jumpingOnClouds has the following parameter(s):
      int c[n]: an array of binary integers
'''


def jumping_on_clouds(arr):
  # TODO: find the cumulus and thunderhead clouds. 
          # Find if player is allowed to jump on clouds
            # find the minimum amount of jumps to finish game
  for i in range(0, len(arr)):
    print(arr[i])

res = jumping_on_clouds([0,1,0,0,0,1,0])
print(res)