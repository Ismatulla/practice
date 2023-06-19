// // time complexity O(n)

// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null
//   let maxSum = -Infinity
//   let tempSum = 0
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i]
//   }

//   tempSum = maxSum
//   for (let i = num; i < arr.lenth; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i]
//     maxSum = Math.max(maxSum, tempSum)
//   }
//   return maxSum
// }

// console.log(maxSubarraySum([1, 2, 4, 5, 6, 9, 10, 3, 5, 6, 12], 5))

// function sameFrequency(num1, num2) {
//   // good luck. Add any arguments you deem necessary.
//   let str1 = String(num1);
//   let str2 = String(num2);

//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let lookup = {}
//   for (let i = 0; i < str1.length; i++) {
//     let letters = str1[i]
//     lookup[letters] ? lookup[letters] += 1 : lookup[letters] = 1
//   }
//   for (let i = 0; i < str2.length; i++) {
//     let letters = str2[i]
//     if (!lookup[letters]) {
//       return false
//     } else {
//       lookup[letters] -= 1
//     }
//   }
//   return true
// }

// challenge 3 frequency counter or multiple point solution 

// function areThereDuplicates(...nums) {
//   // good luck. (supply any arguments you deem necessary.)
//   let freqCheck = {}
//   for (let i = 0; i < nums.length; i++) {
//     let number = nums[i]
//     freqCheck[number] ? freqCheck[number] += 1 : freqCheck[number] = 1
//   }
//   for (let val in freqCheck) {
//     if (freqCheck[val] !== 1) {
//       return true
//     }
//   }
//   return false
// }

// 2 pointers solution

function areThereDuplicates(...nums) {
  // good luck. (supply any arguments you deem necessary.)
  let freqCheck = {}
  for (let i = 0; i < nums.length; i++) {
    let point1 = nums[i]
    let point2 = nums[i + 1]
    if (i + 1 <= nums.length) {
      point1 === point2 ? freqCheck[point1] += 1 : freqCheck[point1] = 1
    }
  }
  console.log(freqCheck)
}

// test cases
areThereDuplicates('a', 'b', 'c', 'a')
// areThereDuplicates(1, 2, 3) // false
//areThereDuplicates(1, 2, 2) // true
//areThereDuplicates('a', 'b', 'c', 'a') // true