"use strict";
const reverseAndPreserve = (inputString) => {
    /*
      Naive approach
  
      1a. Create a separate string
      1b. Create left and right pointers
      2. Iterate through input string
        2a. If inputString[left] is a space, add it to the new string
        2b. If inputString[right] is a character, add it to the new string
        2c. Increment left pointer
        2d. Decrement right pointer
        2e. Terminate when right pointer is 0
    */
    let outputString = "";
    let leftIdx = 0;
    let rightIdx = inputString.length - 1;
    while (rightIdx >= 0) {
        if (inputString[leftIdx] === " ") {
            outputString += " ";
        }
        if (inputString[rightIdx] !== " ") {
            outputString += inputString[rightIdx];
        }
        rightIdx--;
        leftIdx++;
    }
    return outputString;
};
const driver = () => {
    console.log(reverseAndPreserve("internship at geeks for geeks"));
    console.log(reverseAndPreserve("abc de"));
    console.log(reverseAndPreserve("Help others"));
};
driver();
