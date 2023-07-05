# def list_slicing(list):
#     return list[3:]

def quicksort(list):
    if len(list) < 2: return list

    else:
        pivot = list.pop(0)
        higher = []
        lower = []
        for element in list:
            lower.append(element) if element <= pivot else higher.append(element)
        return quicksort(lower) + [pivot] + quicksort(higher)

print(quicksort([10, 5, 2, 3]))