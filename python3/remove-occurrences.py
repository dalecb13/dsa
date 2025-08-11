"""
Given an integer array arr[] and an integer ele,
the task is to remove all occurrences of ele from arr[] in-place
and return the number of elements which are not equal to ele.
If there are k number of elements which are not equal to ele,
then the input array arr[] should be modified such that the first k elements
should contain the elements which are not equal to ele and then the remaining relements.

Note: the order of the first k elements may be changed.
"""

"""
Algorithm/approach

The two pointer technique can be applied to this problem.
The first pointer starts at the left of the array and the second pointer starts at the right of the array.
If the element at the left pointer is not the target value, move the left pointer to the right.
If the element at the right pointer is the target value, move the right pointer to the left.
If the element at the left pointer is the target value, swap the element at the left pointer with the element at the right pointer and move both pointers to the right.
"""

def remove_occurrences(arr: list[int], ele: int) -> int:
  left = 0
  right = len(arr) - 1
  while left < right:
    if arr[left] != ele:
      left += 1
    elif arr[right] == ele:
      right -= 1
    else:
      arr[left], arr[right] = arr[right], arr[left]
      left += 1
      right -= 1
  print(arr)
  return left

if __name__ == "__main__":
  print(remove_occurrences([3, 2, 2, 3], 3))
  print(remove_occurrences([0, 1, 3, 0, 2, 2, 4, 2], 2))