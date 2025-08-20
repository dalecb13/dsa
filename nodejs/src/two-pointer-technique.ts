const twoPointerTechnique = (array: number[], targetSum: number) => {
  array.sort();
  let left = 0;
  let right = array.length - 1;

  const result: [number, number][] = [];

  while (left < right) {
    if (array[left] + array[right] > targetSum) {
      right--;
    } else if (array[left] + array[right] < targetSum) {
      left++;
    } else {
      result.push([array[left], array[right]]);
      left++;
      right--;
    }
  }

  return result
}

const twoPointerDriver = () => {
  console.log(twoPointerTechnique([-3, -2, -1, 0, 1, 2, 3], 3))
}

export { twoPointerTechnique }
