// string-character-code-hello.ts の続き

// 4バイト文字を正しく処理できない例
// 「.」が Code Unit 単位で処理してしまうので、
// 下位サロゲートだけにマッチしてしまい、結果は文字化けする
const resultA = "あ！𦈢とは".match(/(.)とは/)
console.log(resultA)

// 正規表現の u オプションをつけると解決する
// 「.」が Code Point 単位で処理されるので、結果も適切な表示になる
const resultB = "あ！𦈢とは".match(/(.)とは/u)
console.log(resultB)

// 文字数を正しく数えたい
const textA = "🍎🍊🍣"
console.log(textA.length) // Code Unit で処理されるので 6 になってしまう

// Array.from は Code Point ごとに区切ってくれる
const codePoints = Array.from(textA)
console.log(codePoints.length)

// 10進数の Unicode Code Point が返る
console.log(codePoints[0].codePointAt(0))

// UTF-16 Code Unit リテラル
const somethingA = "\uD858\uDE22" // サロゲートペア
console.log(somethingA)
console.log(somethingA === "𦈢") // 真になる

// UTF-16 Code Point リテラル
const somethingB = "\u{26222}"
console.log(somethingB)
console.log(somethingB === "𦈢") // 真になる

// String.fromCharCode は10進数の Code Point から文字列にする
// https://www.fileformat.info/info/unicode/char/3042/index.htm
const somethingC = String.fromCharCode(12354)
console.log(somethingC)
console.log(somethingC === "あ") // 真になる

export {}
