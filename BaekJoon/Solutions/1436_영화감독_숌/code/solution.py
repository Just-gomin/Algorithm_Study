def check666(num):
    if "666" in str(num):
        return True
    else:
        return False


n = int(input())

number_of_the_end = 666
counter = 1

while counter != n:
    number_of_the_end += 1

    if check666(number_of_the_end):
        counter += 1


print(number_of_the_end)
