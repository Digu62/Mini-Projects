teste = int(input())

def fib(n):
  if n == 0:
    return 0
  if n==1:
    return 1  
  else:
    return fib(n-1) + fib(n-2)

def ch(n):
  if n == 0 or n==1:
    return 0
  else:
    return ch(n-1) + ch(n-2) + 2
  
while teste:
  teste = teste -1
  n = int(input())
  print('fib(',n,') = ',ch(n),' calls =',fib(n))
  