from sys import stdin

def fib(n):
  if n in memo1:
    return memo1[n]

  else:
    f = fib(n-1) + fib(n-2)

  memo1[n] = f
  return f

def calls(n):
  if n in memo2:
    return memo2[n]

  if n == 0 or n==1:
    call = 0

  else:
    call = calls(n-1) + calls(n-2) + 2

  memo2[n]= call
  return call

memo1 = {}
memo1[0] = 0
memo1[1] = 1
memo2 ={}

N = int(input())
for i in range(N):
  n = int(input())
  #n = int(input())
  print("fib({}) = {} calls = {}".format(n,calls(n),fib(n)))