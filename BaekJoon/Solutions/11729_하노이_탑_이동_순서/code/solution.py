class hannoi():
    def __init__(self, height):
        self.height = height
        self.move_history = []

    def move_disk(self, dept, dest, through, num):
        if num < 1:
            return
        else:
            self.move_disk(dept, through, dest, num - 1)
            self.move_history.append("{0} {1}".format(dept, dest))
            self.move_disk(through, dest, dept, num - 1)


n = int(input())

tower = hannoi(n)
tower.move_disk(1, 3, 2, tower.height)

print(len(tower.move_history))

for move in tower.move_history:
    print(move)
