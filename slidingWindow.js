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

// function areThereDuplicates(...nums) {
//   // good luck. (supply any arguments you deem necessary.)
//   let freqCheck = {}
//   for (let i = 0; i < nums.length; i++) {
//     let point1 = nums[i]
//     let point2 = nums[i + 1]
//     if (i + 1 <= nums.length) {
//       point1 === point2 ? freqCheck[point1] += 1 : freqCheck[point1] = 1
//     }
//   }
//   console.log(freqCheck)
// }

// // test cases
// areThereDuplicates('a', 'b', 'c', 'a')
// areThereDuplicates(1, 2, 3) // false
//areThereDuplicates(1, 2, 2) // true
//areThereDuplicates('a', 'b', 'c', 'a') // true

// productOfArray([1,2,3]) // 6

// function productOfArray(arr) {
//   if (arr.length == 0) return 1

//   console.log(productOfArray(arr.slice(1)))
//   return arr[0] * productOfArray(arr.slice(1))
// }
// productOfArray([1, 2, 3, 10])


// recursion

// function recursiveRange(num) {
//   if (num === 0) return 0
//   return num + recursiveRange(num - 1)
// }
// console.log(recursiveRange(6))


// const reeversed = (str) => {
//   if (str.length === 1) return str;
//   const lastChar = str.slice(-1);
//   const remainingStr = str.slice(0, -1);
//   return lastChar + reeversed(remainingStr);
// }
// console.log(reeversed('ismatulla'))

// BINARY SEARCH ALGORITHMS

// add whatever parameters you deem necessary - good luck!
//function binarySearch(arr, value) {
// add whatever parameters you deem necessary - good luck!
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== value && start <= end) {
//     if (value < arr[middle]) {
//       end = middle - 1
//     } else {
//       start = middle + 1
//     }
//     middle = Math.floor((start + end) / 2)
//   }
//   if (arr[middle] === value) {
//     return middle

//   }
//   return -1
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9))


// bubble and selection sort algorithms

// // selectionSort sample
// function sortArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let start = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[start]) {
//         start = j
//       }
//     }
//     let temp = arr[i]
//     arr[i] = arr[start]
//     arr[start] = temp
//   }
//   return arr
// }
// console.log(sortArray([2, 6, 1, 45, 23, 37, 54, 28]))
// arr[2,6,1,45,23,37,54,28] sort them in ascending order

// INSERTION SORT

// function insertionSort(arr) {
//   for (var i = 1; i < arr.length; i++) {
//     let currentVal = arr[i]
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       console.log(j)
//       arr[j + 1] = arr[j]
//     }
//     arr[j + 1] = currentVal

//   }

//   return arr
// }
// insertionSort([7, 4, 2, 0, 11, 6])

//  Merging arrays 

function merging(arr1, arr2) {
  let sorted = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      sorted.push(arr1[i])
      i++
    } else {
      sorted.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    sorted.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    sorted.push(arr2[j])
    j++
  }
  console.log(sorted)
}
merging([1, 2, 6, 19], [45, 34, 76, 13])
