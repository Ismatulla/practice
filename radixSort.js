//  gets digit itself

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// counts number if digits in number for ex: 342464 (it is 5 ,because 0 based);

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// checks what is biggestNumber in array by counting number of digits 
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums); // returns biggest numbers digit
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i])
    }
    console.log(digitBuckets)
    nums = [].concat(...digitBuckets)
    console.log(nums)
  }
}
radixSort([23, 345, 5467, 12, 2345, 9852])