## solution - mergeSort
def merge(low, mid, high):
    i, j, k = low, mid + 1, low
    sortedList = []
    while i <= mid and j <= high:
        if(nlist[i] < nlist[j]):
            sortedList.append(nlist[i])
            i += 1
        else:
            sortedList.append(nlist[j])
            j += 1
        k += 1

    rest = j if i > mid else i
    while(k <= high):
        sortedList.append(nlist[rest])
        rest += 1
        k += 1

    for i in range(low, high + 1):
        nlist[i] = sortedList[i - low]


def mergeSort(low, high):
    if(low < high):
        mid = int((low+high)/2)
        mergeSort(low, mid)
        mergeSort(mid+1, high)
        merge(low, mid, high)


times = int(input())  # 숫자의 개수

nlist = [0 for i in range(times)]

for i in range(times):
    nlist[i] = int(input())

mergeSort(0, len(nlist)-1)

for i in range(times):
    print(nlist[i])
