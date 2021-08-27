a, b, c = map(int, input().split())
result = "{0}\n{1}\n{2}\n{3}".format(
    (a+b) % c, ((a % c)+(b % c)) % c, (a*b) % c, ((a % c)*(b % c)) % c)
print(result)
