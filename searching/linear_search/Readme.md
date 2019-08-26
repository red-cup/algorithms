# Linear Search

There are many different forms of linear search algorithms. Each form has it's own benefits and drawbacks. The typical implementation of a linear search algorithm is as follows:

Click [here](https://www.cs.usfca.edu/~galles/visualization/Search.html) An Excellent visualization of is process.

- **Conditions:**

  - **Arguments**
    - Ordered or Unordered Collection (Array)
    - Element for which to search for
  - **Rules:**
    - Both the searched collection and the element should share:
      - Datatype
    - Collection can be infinite

- **Psudo Code**
  - Given the arguments
  - iterate through the collection
    - for each item in the collection
      - compare the item to the searched element
        - if a match
          - return the index of the searched element
        - if no match
          - continue the loop
  - item not found
    - return -1
