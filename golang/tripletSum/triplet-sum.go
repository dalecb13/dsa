package main

import (
	"fmt"
	"sort"
)

type Triplet struct {
	first  int
	second int
	third  int
}

func tripletSumNaive(array []int, targetSum int) [][]int {
	sort.Ints(array)
	// Set doesn't exist in golang, but can use a Map because keys are unique
	resultsMap := map[Triplet]bool{}

	for i := range array {
		for j := i + 1; j < len(array); j++ {
			for k := j + 1; k < len(array); k++ {
				if array[i]+array[j]+array[k] == targetSum {
					resultsMap[Triplet{array[i], array[j], array[k]}] = true
				}
			}
		}
	}

	var keys [][]int
	for k := range resultsMap {
		arr := []int{k.first, k.second, k.third}
		keys = append(keys, arr)
	}

	return keys
}

func twoPointerTechnique(array []int, targetSum int) [][]int {
	var leftPointer = 0
	var rightPointer = len(array) - 1

	var result [][]int

	for leftPointer < rightPointer {
		if array[leftPointer]+array[rightPointer] < targetSum {
			leftPointer++
		} else if array[leftPointer]+array[rightPointer] > targetSum {
			rightPointer--
		} else {
			result = append(result, []int{array[leftPointer], array[rightPointer]})
			leftPointer++
			rightPointer--
		}
	}

	return result
}

func tripleSumOptimized(array []int, targetSum int) [][]int {
	sort.Ints(array)
	resultsMap := map[Triplet]bool{}

	for i := range array {
		twoPointer := twoPointerTechnique(array[i+1:], targetSum-array[i])
		for j := range twoPointer {
			resultsMap[Triplet{array[i], twoPointer[j][0], twoPointer[j][1]}] = true
		}
	}

	var keys [][]int
	for k := range resultsMap {
		arr := []int{k.first, k.second, k.third}
		keys = append(keys, arr)
	}

	return keys
}

func main() {
	fmt.Println(tripletSumNaive([]int{0, -4, 3, 1}, 0))
	fmt.Println(tripleSumOptimized([]int{0, -4, 3, 1}, 0))
}
