//
// 非破壊
//

// includes でシンプルな検索
const words = ["apple", "plum", "orange", "pineapple", "x", "by", "hat"]
const result: boolean = words.includes("orange")
console.log(`includes => ${result}`)

// map でそれぞれの要素を大文字化
const upperWords: string[] = words.map((word: string): string => {
  return word.toUpperCase()
})
console.log(`map => ${upperWords}`)

// find は要素の検索、最初に見つかった一個を返す
const apple: string | undefined = words.find((word: string): boolean => {
  return word.includes("app")
})
console.log(`find => ${apple}`)

// filter は該当する要素を配列で返す
const apples: string[] = words.filter((word: string): boolean => {
  return word.includes("apple")
})
console.log(`filter => ${apples}`)

// concat で配列の連結
const newWords: string[] = ["cat", "dog", "bird"]
const manyWords = words.concat(newWords)
console.log(`concat => ${manyWords}`)

//
// 破壊
//

// reverse は要素を逆順にする、
// 配列そのものが逆順になり、返り値も逆順になったものが返る
console.log(`reverse return value => ${words.reverse()}`)
console.log(`reverse original => ${words}`)

// sort は要素を順番に並べる
// 引数が何も無しだとアルファベット順になる
words.sort()
console.log(`sorted => ${words}`)

// 文字数の順でソート
words.sort((a: string, b: string): number => {
  return a.length > b.length ? 1 : -1
})
console.log(`sorted => ${words}`)

// push で要素の追加
words.push("grape")
console.log(`push => ${words}`)

// pop で末尾要素の取り出し、破壊的
const last: string | undefined = words.pop()
console.log(`pop => ${words}, last => ${last}`)

// splice でインデックス4以降の要素を取り除く、破壊的
words.splice(4)
console.log(`spliced => ${words}`)

// splice でインデックス2以降の要素を1個取り除く、破壊的
words.splice(2, 1)
console.log(`spliced => ${words}`)

// splice での要素の置換
words.splice(2, 2, "fish", "beef")
console.log(`spliced => ${words}`)
