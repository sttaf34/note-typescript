// developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set

// 配列からセット
const numbersA = [1, 2, 3, 4]
const numbersB = [5, 6, 3, 4]
const numberSet = new Set([...numbersA, ...numbersB])
console.log(numberSet)

// セットから配列
const numbers = [...numberSet]
console.log(numbers)

export {}
