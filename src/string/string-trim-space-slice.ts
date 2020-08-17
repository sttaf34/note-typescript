// スペース除去
const textA = " Hello "
console.log(`[${textA.trim()}]`)

// 全角スペースも除去される
const textB = " Hello　"
console.log(`[${textB.trim()}]`)

// 切り取り
const textC = "abcdefghijklmnopqrstuvwxyz"
const beginIndex = 0
const endIndex = 5
console.log(textC.slice(beginIndex, endIndex))

export {}
