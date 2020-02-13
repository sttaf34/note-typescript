// スプレッド演算子で配列をコピー
const numbersA = [1, 2, 3]
const numbersB = [...numbersA]
console.log(numbersB)

// コピーしつつ追加
// 浅いコピーなので階層になっているときは注意
const numbersC = [...numbersA, 4, 5]
console.log(numbersC)
const numbersD = [...numbersA, ...numbersB]
console.log(numbersD)

// 同様にオブジェクトをコピー
const objectA = { a: 100, b: 200 }
const objectB = { ...objectA }
console.log(objectB)

// コピーしつつ追加
const objectC = { ...objectA, c: 300 }
console.log(objectC)
const objectD = { d: 400, e: 500 }
const objectE = { ...objectA, ...objectD }
console.log(objectE)
