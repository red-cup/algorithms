# Binary Search

Binary search search algorithms work in a very similar way to searching through a dictionary. If you were looking for the word Elk, it is unlikely that you would start on the first page. Instead, you would probably guess a random starting point and compare your result on your desired result. So say you open the dictionary and land on Code. You know that Elk is further ahead of "C" so you have already eliminated everything before "C". You then can repeat this process, gradually reducing your searchable span of words.

Click [here](https://www.cs.usfca.edu/~galles/visualization/Search.html) An Excellent visualization of is process.

- **Conditions:**

  - **Arguments**
    - Ordered Collection (Array)
    - Element for which to search for
  - **Rules:**
    - Both the searched collection and the element should share:
      - Datatype
    - Collection cannot be infinite

- **Psudo Code**
  - Given the arguments
  - Capture the furthest left index
  - Capture the middle index
  - Capture the right index
  - While
    - If the middle element != the searched element
    - And the left index is still less than the right index - if the searched element was less than the middle element - set the right index to be on less than the middle index - else set the left index to be one higher than the middle index
      // complete while
    - if the middle element is the searched element
      - return the index of the searched element
    - else
      - return -1
