# helper function to build list
def ordered_sequential_list(min_num, max_num):
    return list(range(min_num, max_num+1))


# create list with min and max of your choice
List = ordered_sequential_list(0, 100)

# give list and the number you want to search for


def linear_search(List, number):
    if number not in List:
        return -1
    else:
        return List.index(number)


print(linear_search(List, 2))  # => 2
print(linear_search(List, 97))  # => 97
print(linear_search(List, 101))  # => 101
