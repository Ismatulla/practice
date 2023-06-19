// 2 point solution ,time complexity O(n)
// function averagePair(arr, avg) {
//   if (arr.length === 0) {
//     return false
//   }
//   let point1 = 0;
//   let point2 = arr.length - 1
//   while (point1 < arr.length) {
//     if (((arr[point1] + arr[point2]) / 2) === avg) {
//       return true
//     } else if (((arr[point1] + arr[point2]) / 2) < avg) point1++
//     else point2--
//   }
//   return false
// }
// console.log(averagePair([1, 2, 3, 5], 4.5))


// find subsequent chars time complexity O(m+n)

// function isSubsiquent(str1, str2) {
//   let i = 0;
//   let j = 0;
//   if (!str1) return true
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++
//     if (i === str1.length) return true
//     j++
//   }
//   return false
// }

// console.log(isSubsiquent('hello', 'hlelo world'))

// find max sum of subarray consecetive order 

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null
  let total = 0
  for (let i = 0; i < num; i++) {
    total += arr[i]
  }
  let current = total
  for (let i = num; i < arr.length; i++) {
    current += arr[i] - arr[i - num];
    console.log(arr[i - num])
    total = Math.max(total, current);
  }
  return total
}

maxSubarraySum([100, 200, 300, 400], 2) // 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)  // 39 
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
// maxSubarraySum([2, 3], 3) // null