n = int(input())

counter = 0
newN = n

while counter == 0 or n != newN:
    newN = (newN % 10)*10 + (newN//10 + newN % 10) % 10
    counter += 1

print(counter)
