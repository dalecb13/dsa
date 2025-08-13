# Move all zeroes to the end of the array

Given an array of integers arr[], move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.

## Examples

First example

> Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
> Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]
> Explanation: There are three 0s that are moved to the end.

Second example

> Input: arr[] = [10, 20, 30]
> Output: arr[] = [10, 20, 30]
> Explanation: No change in array as there are no 0s.

Third example

> Input: arr[] = [0, 0]
> Output: arr[] = [0, 0]
> Explanation: No change in array as there are all 0s.

## Approach

One approach would be to swap the zero with its next immediate non-zero element, and we continue until we reach the end of the array. However that only assumes if there is only one 0 in the array. If there are multiple zeroes, then they will eventually be stuck next to each other and require multiple iterations through the array. Ideally the best approach would have O(n) time complexity.
