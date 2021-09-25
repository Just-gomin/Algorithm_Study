n = int(input())

coords = list(map(int, input().split()))
pressMap = {key: i for i, key in enumerate(sorted(set(coords)))}

pressed = [str(pressMap[coord]) for coord in coords]

print(" ".join(pressed))
