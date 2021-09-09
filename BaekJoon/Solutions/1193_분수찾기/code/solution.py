def sigmaN(n):
    return int(n*(n+1)/2)


x = int(input())

line = 1
while not(sigmaN(line-1) < x and x <= sigmaN(line)):
    line += 1

step = x - sigmaN(line-1) - 1
if line % 2 == 1:
    print("{0}/{1}".format(line - step, 1 + step))
else:
    print("{0}/{1}".format(1 + step, line - step))
