//  frequency counter problem solution time complexity O(n);

function frequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequency1 = {}
  let frequency2 = {}

  for (let val of arr1) {
    frequency1[val] = (frequency1[val] || 0) + 1
    console.log(val)
  }
  for (let val of arr2) {
    frequency2[val] = (frequency2[val] || 0) + 1
  }

  for (let key in frequency1) {
    if (!(key ** 2 in frequency2)) {
      return false
    }
    // if (frequency2[key ** 2] !== frequency1[key]) {
    //   return false
    // }
  }
  console.log(frequency1)
  console.log(frequency2)
  return true
}

// string anogram 

function stringAnog(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  const data1 = str1.toLowerCase().split('')
  const data2 = str2.toLowerCase().split('')  // both of them O(n)

  let freqStringCount1 = {}
  let freqStringCount2 = {}
  for (let value of data1) {
    freqStringCount1[value] = (freqStringCount1[value] || 0) + 1
  }
  for (let value of data2) {
    freqStringCount2[value] = (freqStringCount2[value] || 0) + 1
  }

  // main logic is here 
  for (let key in freqStringCount1) {
    if (!(key in freqStringCount2)) {
      return false
    }
    let value = freqStringCount2[key]
    let value2 = freqStringCount1[key]
    if (value !== value2) {
      return false
    }
  }
  //  end of main logic
  return true
}
console.log(stringAnog('', ''))