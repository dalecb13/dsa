"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const two_pointer_technique_1 = require("./two-pointer-technique");
const tripletSumNaive = (array, targetSum) => {
    const result = new Set();
    /*
      Naive approach
  
      Time Complexity: O(n^3)
      Space Complexity: O(1)
  
      Use a set to keep track of unique triplets
      Also sort triplets to prevent duplicates
  
      1. Iterate through array
        1a. Create container tuple
        1b. Set first element in tuple to current element
      2. Iterate through array
        2a. Set second element in tuple to current element
      3. Iterate through array
        3a. Set third element in tuple to current element
        3b. If sum of tuple is equal to target sum, add tuple to result
    */
    const tuple = [];
    for (let i = 0; i < array.length; i++) {
        tuple[0] = array[i];
        for (let j = i + 1; j < array.length; j++) {
            tuple[1] = array[j];
            for (let k = j + 1; k < array.length; k++) {
                tuple[2] = array[k];
                if (tuple[0] + tuple[1] + tuple[2] === targetSum) {
                    tuple.sort();
                    result.add([tuple[0], tuple[1], tuple[2]]);
                }
            }
        }
    }
    return Array.from(result);
};
/*
  Optimized solution

  Time Complexity: O(n^2)

  It is possible to reduce the time complexity because this
  problem is a special case of the two pointer technique.
  By "fixing" the first element of the triplet, we only need to
  test the second and third elements. Thus we have effectively
  eliminated one of the loops.

  Example:
  - Given an array with elements n1, n2, n3, n4, ..., nn, and a targetSum of m

  1. Fix the first element as n1
  2. Run two pointer technique on the array from [n2, ..., nn]
    2a. targetSum of two pointer technique is m - n1
    2b. return pair that sums to targetSum
*/
const optimizedTripletSum = (array, targetSum) => {
    array.sort();
    const result = new Set();
    const triplet = [];
    for (let i = 0; i < array.length; i++) {
        triplet[0] = array[i];
        const subArray = array.slice(i + 1);
        const twoPointer = (0, two_pointer_technique_1.twoPointerTechnique)(subArray, targetSum - triplet[0]);
        for (let j = 0; j < twoPointer.length; j++) {
            triplet[1] = twoPointer[j][0];
            triplet[2] = twoPointer[j][1];
            triplet.sort();
            result.add([triplet[0], triplet[1], triplet[2]]);
        }
    }
    return Array.from(result);
};
const tripletSumDriver = () => {
    console.log(tripletSumNaive([0, -1, 2, -3, 1], 0));
    console.log(optimizedTripletSum([0, -1, 2, -3, 1], 0));
};
tripletSumDriver();
