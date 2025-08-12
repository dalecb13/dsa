package main

import "fmt"

func removeOccurrences(input []int, ele int) int {
	var leftPointer = 0
	var rightPointer = len(input) - 1

	for leftPointer < rightPointer {
		if input[leftPointer] != ele {
			fmt.Println("increment left pointer")
			leftPointer++
		} else if input[rightPointer] == ele {
			fmt.Println("decrement right pointer")
			rightPointer--
		} else {
			fmt.Printf("swap input[%v] = %v with input[%v] = %v\n", leftPointer, input[leftPointer], rightPointer, input[rightPointer])
			input[leftPointer], input[rightPointer] = input[rightPointer], input[leftPointer]
			leftPointer++
			rightPointer--
		}
	}

	return rightPointer
}

func main() {
	fmt.Println(removeOccurrences([]int{3, 2, 2, 3}, 3))
	fmt.Println(removeOccurrences([]int{0, 1, 3, 0, 2, 2, 4, 2}, 2))
}
