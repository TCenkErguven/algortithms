## For startup = node server.mjs

# Sorting Algorithms: Time Complexity

| Algorithm     | Worst-case Running Time | Average-case/Expected Running Time |
|---------------|--------------------------|------------------------------------|
| Insertion Sort| O(n²)                    | O(n²)                              |
| Merge Sort    | O(n log n)               | O(n log n)                         |
| Heapsort      | O(n log n)               | O(n log n)                         |
 | Counting Sort | O(n + k)                 | O(n + k)                           |
| Radix Sort    | O(d(n + k))              | O(d(n + k))                        |
| Bucket Sort   | O(n²)                    | O(n) (average-case)                |

## Key
- `n` represents the number of elements.
- `k` is the range of the input.
- `d` is the number of digits (for Radix Sort).

# Searching Algorithms: Time Complexity

## Linear Search

Best Case: In the best case, the key might be present at the first index. So the best case complexity is O(1)
Worst Case: In the worst case, the key might be present at the last index i.e., opposite to the end from which the search has started in the list. So the worst-case complexity is O(N) where N is the size of the list.
Average Case: O(N)

## Binary Search

Time Complexity: 
Best Case: O(1)
Average Case: O(log N)
Worst Case: O(log N)
Auxiliary Space: O(1), If the recursive call stack is considered then the auxiliary space will be O(logN).

## Ternary Search

Time Complexity:
Worst case: O(log3N)
Average case: Θ(log3N)
Best case: Ω(1)

Auxiliary Space: O(1)

## Jump Search

Better than a linear search for arrays where the elements are uniformly distributed.
Jump search has a lower time complexity compared to a linear search for large arrays.
The number of steps taken in jump search is proportional to the square root of the size of the array, making it more efficient for large arrays.
It is easier to implement compared to other search algorithms like binary search or ternary search.
Jump search works well for arrays where the elements are in order and uniformly distributed, as it can jump to a closer position in the array with each iteration.

Time Complexity : O(?n) 
Auxiliary Space : O(1)

## Exponential Search

Time Complexity : O(Log n) 
Auxiliary Space : The above implementation of Binary Search is recursive and requires O(Log n) space. With iterative Binary Search, we need only O(1) space.
Applications of Exponential Search: 

Exponential Binary Search is particularly useful for unbounded searches, where size of array is infinite. Please refer Unbounded Binary Search for an example.
It works better than Binary Search for bounded arrays, and also when the element to be searched is closer to the first element.