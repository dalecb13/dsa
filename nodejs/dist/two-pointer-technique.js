"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoPointerTechnique = void 0;
const twoPointerTechnique = (array, targetSum) => {
    array.sort();
    let left = 0;
    let right = array.length - 1;
    const result = [];
    while (left < right) {
        if (array[left] + array[right] > targetSum) {
            right--;
        }
        else if (array[left] + array[right] < targetSum) {
            left++;
        }
        else {
            result.push([array[left], array[right]]);
            left++;
            right--;
        }
    }
    return result;
};
exports.twoPointerTechnique = twoPointerTechnique;
const twoPointerDriver = () => {
    console.log(twoPointerTechnique([-3, -2, -1, 0, 1, 2, 3], 3));
};
