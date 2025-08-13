"""
Given a sorted array arr[] of size n, the goal is to rearrange the array so
that all distinct elements appear at the beginning in sorted order.
Additionally, return the length of this distinct sorted subarray.

Approach:
Since the array is sorted, duplicates follow one another. Initialize an empty
list that will keep track of the unique numbers. Also use a counter to
keep track of the current index and start it at 1. If the value at current_index
is not the same as the value current_index - 1, then add that number to the list.
Increment the counter. Return the list that has uniques

Approach with Hash Set
Use a Hash Set to keep track of unique values. In addition to making sure that 
there are no duplicates, this also ensures that the values are in sorted order.
"""

def remove_duplicates_hash_set(arr: list[int]) -> list[int]:
  unique = set()

  for num in arr:
    unique.add(num)

  return list(unique)

if __name__ == "__main__":
  print(remove_duplicates_hash_set([2, 2, 2, 2, 2]))
  print(remove_duplicates_hash_set([1, 2, 2, 3, 4, 4, 4, 5, 5]))
  print(remove_duplicates_hash_set([1, 2, 3]))
