//
// Array の初期化とインデックスでの操作
//

// 要素数だけを指定しての初期化
const numbersA = Array<number>(5)

// <5 empty items> と表示される、各要素が undefined になるわけではない
console.log(numbersA)

// 要素が undefined ではないが、undefined が返る、静的解析も何も言わない
console.log(numbersA[2])

// 要素数と各要素の値を指定して初期化
const numbersB = Array<number>(5).fill(100)
console.log(numbersB)

// 静的解析が型が違うと言ってくれる
// numbersB[2] = undefined

// インデックスを飛ばすと、飛ばされたところは <n empty items> となる
numbersB[8] = 200
console.log(numbersB)

// 各要素が undefined な Array を生成
const numbersC = Array.from({ length: 5 })
console.log(numbersC)

//
// Array.from に関数を渡しての初期化
//

// Array.from に関数を渡して生成
const numbersD = Array.from({ length: 5 }, () => 300)
console.log(numbersD)

// Array.from に関数を渡して生成の例
console.log(Array.from({ length: 5 }, (_, index) => index))
console.log(Array.from({ length: 5 }, (_, index) => index * 2))

// Array.from で2次元配列を生成
const numbersE = Array.from({ length: 5 }, () => Array<number>(5).fill(100))
console.log(numbersE)

export {}
