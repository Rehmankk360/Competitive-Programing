var twoSum = function (numbers, target) {
  const hash = new Map()
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    if (hash.has(num)) return [hash.get(num) + 1, i + 1]
    hash.set(target - num, i)
  }
  return []
}