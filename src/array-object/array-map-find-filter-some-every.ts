// 配列に関数を渡して何かする系
// アロー関数の省略形は ./arrow-function.ts にまとめてある

// map でそれぞれの要素を大文字化
const words = ["apple", "plum", "orange", "pineapple", "xxx", "by", "hat"]
const upperWords: string[] = words.map((word: string): string => {
  return word.toUpperCase()
})
console.log(`map => ${upperWords}`)

// find は該当する要素の最初に見つかった一個を返す
const lengthThree: string | undefined = words.find((word) => word.length === 3)
console.log(`find => ${lengthThree}`)

// filter は該当する要素を配列で返す
const lengthThrees: string[] = words.filter((word: string): boolean => {
  return word.length === 3
})
console.log(`filter => ${lengthThrees}`)

// some
// 配列を見ていって、一個でも true になれば true が返る
const resultA = words.some((word) => word === "hat")
console.log(`some => ${resultA}`)

const resultB = words.some((word) => word === "cap")
console.log(`some => ${resultB}`)

// every
// 配列を見ていって、全部 true になれば true が返る
const resultC = words.every((word) => word.length > 1)
console.log(`every => ${resultC}`)

export {}
