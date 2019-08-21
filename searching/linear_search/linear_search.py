<<<<<<< HEAD

=======
def ordered_sequential_list(min_num, max_num):
    return list(range(min_num, max_num+1))
>>>>>>> 139e0741ae2b6d67660188cb84912d619a9a41b0

# helper function to build list
def ordered_sequential_list(min_num, max_num):
    return list(range(min_num, max_num+1))


# create list with min and max of your choice
List = ordered_sequential_list(0,100)


# give list and the number you want to search for
def linear_search(List, number):
    if number not in List:
        return -1
    else:
        return List.index(number)


<<<<<<< HEAD
# testing function
print(linear_search(List, 2))
print(linear_search(List, 97))
print(linear_search(List, 101))
=======
print(linear_search(List, 2)) # => 2
print(linear_search(List, 97)) # => 97
print(linear_search(List, 101)) # => 101
>>>>>>> 139e0741ae2b6d67660188cb84912d619a9a41b0


