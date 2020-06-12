//
// 非破壊
//

// includes でシンプルな検索
const words = ["apple", "plum", "orange", "pineapple", "x", "by", "hat"]
const result: boolean = words.includes("orange")
console.log(`includes => ${result}`)

// 検索してインデックスを取得
const index = words.findIndex((word) => word === "by")
console.log(`index => ${index}`)

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
