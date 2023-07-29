function duplicateCount(text) {
  const lower = text.toLowerCase()
  let repeat = []
  let uu = []
  if (lower.length === 0) count = 0
  for (let i = 0; i < lower.length; i++) {
    if (repeat.length !== 0 && repeat.includes(lower[i])) {
      uu.push(lower[i])
    } else {
      repeat.push(lower[i])
    }
  }
  return new Set(uu).size
}
duplicateCount("Indivisibilities")