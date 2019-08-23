# Binary Search

Binary search search algorithms work in a very similar way to searching through a dictionary. If you were looking for the word Elk, it is unlikely that you would start on the first page. Instead, you would probably guess a random starting point and compare your result on your desired result. So say you open the dictionary and land on Code. You know that Elk is further ahead of "C" so you have already eliminated everything before "C". You then can repeat this process, gradually reducing your searchable span of words.

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
