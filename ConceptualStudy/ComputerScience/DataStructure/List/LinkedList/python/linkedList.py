class Node:
    def __init__(self, val=None):
        self.key = val
        self.next = None
    
    def setLink(self, next):
        self.next = next
    
    def printNode(self):
        print("Node : {0}".format(self.key))

class LinkedList:
    def __init__(self):
        self.header = Node()
        self.list_size = 0
    
    def pos_node(self, pos):
        cur = self.header
        i = 0

        while i < pos:
            cur = cur.next
            i+=1
        
        return cur

    def insert(self, val, pos):
        if (pos > self.list_size):
            pos = self.list_size
        elif (pos < 0):
            pos = 0

        cur = self.pos_node(pos)
        next_node = cur.next

        new_node = Node(val)
        new_node.next = next_node

        cur.next = new_node
        
        self.list_size += 1
        print("Node(key : {0}) is inserted at {1}.".format(val, pos))    

    def delete(self, pos):
        if pos < 0 or pos > self.list_size:
            print("Posistion : {0} - Out of range, list range is '0 ~ {1}'.".format(pos, self.list_size))
            return
        prenode = self.pos_node(pos - 1)
        curnode = prenode.next
        nextnode = curnode.next

        prenode.next = nextnode

        self.list_size -= 1
        print("Node(key : {0}) at {1} is deleted.".format(curnode.key, pos))

    def print_pos_node(self, pos):
        cur = self.pos_node(pos)
        print("Position - {0} : Value - {1}".format(pos, cur.key))
    
    def listSize(self):
        return self.list_size

    def printList(self):
        cur = self.header

        print("Linked List")
        while cur.next != None:
            cur = cur.next
            cur.printNode()