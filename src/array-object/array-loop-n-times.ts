// ゼロ始まりの連番の生成
// ちなみに演算子の優先順位的には「.」>「...」
const emptyArray = Array(5)
const indexes = [...emptyArray.keys()]
console.log(indexes)

// 何時・何分・何秒かの選択肢に使ってみたりする
const hours = [...Array(12).keys()]
console.log(hours)

// 繰り返し処理
hours.forEach(() => console.log("hour"))

// インデックスを使ってみる
hours.forEach((index) => console.log(index))

// 回数指定での繰り返し処理の別の書き方
Array.from({ length: 3 }).forEach(() => {
  console.log("loop")
})

// インデックスを使いたい場合の別の書き方
Array.from({ length: 3 }).forEach((_, index) => {
  console.log(index)
})

// 1 始まりにしたいなら
const numbers = Array.from({ length: 5 }, (_, index) => index + 1)
console.log(numbers)

export {}
