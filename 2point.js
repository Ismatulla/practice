// 2 point solution ,time complexity O(n)
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return
  }
  let point1 = 0
  let point2 = 1
  while (point2 < arr.length) {
    if (arr[point1] === arr[point2]) {
      point2++
    } else if (arr[point1] !== arr[point2]) {
      point1++
      arr[point1] = arr[point2]
    }
  }
  return point1 + 1
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 4, 7]))

