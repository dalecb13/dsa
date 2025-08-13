package main

import "fmt"

/*
	Naive approach would be to create an extra array and put all the non-zero elements into it and then put the zeroes into the end.
*/

func moveZeroesNaive(nums []int) []int {
	temp := make([]int, len(nums))

	var leftPointer = 0

	for i := 0; i < len(nums); i++ {
		if nums[i] != 0 {
			temp[leftPointer] = nums[i]
			leftPointer++
		}
	}

	for i := leftPointer; i < len(nums); i++ {
		temp[i] = 0
	}

	return temp
}

// func moveZeroes(nums []int) []int {
// 	var leftPointer = 0
// 	var rightPointer = len(nums) - 1

// }

func main() {
	fmt.Println(moveZeroesNaive([]int{0, 1, 0, 3, 12}))
	fmt.Println(moveZeroesNaive([]int{1, 2, 0, 4, 3, 0, 5, 0}))
	fmt.Println(moveZeroesNaive([]int{10, 20, 30}))
	fmt.Println(moveZeroesNaive([]int{0, 0}))
}
