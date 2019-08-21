
from '../helpers/' import 'list_builders'

List = ordered_sequential_list(0,100)

def linear_search(List, element):
    if element not in List:
        return -1
    else:
        return List.index(element)

print(linear_search(List, 2))
print(linear_search(List, 97))
print(linear_search(List, 101))


