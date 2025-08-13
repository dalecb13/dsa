"""
Given an array of integers arr[],move all the zeros to the end of
the array while maintaining the relative order of all non-zero elements.

Example 1:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: [0]
Output: [0]

Example 3:
Input: [1, 0, 2, 3, 12, 11]
Output: [1, 2, 3, 12, 11, 0]

Example 4:
Input: [10, 20, 30]
Output: [10, 20, 30]
"""

def move_zeroes_to_the_end(arr: list[int]) -> list[int]:
    count = 0

    for i in range(len(arr)):
        if arr[i] != 0:
            arr[i], arr[count] = arr[count], arr[i]
            count += 1
    
    return arr


if __name__ == "__main__":
    print(move_zeroes_to_the_end([0, 1, 0, 3, 12]))
    print(move_zeroes_to_the_end([0]))
    print(move_zeroes_to_the_end([1, 0, 2, 3, 12, 11]))
    print(move_zeroes_to_the_end([10, 20, 30]))