// 空文字列を変換すると 0 になる
console.log(Number("")) // 0

// これらの定数の型は、どちらもnumber
const aInfiniy = Number.POSITIVE_INFINITY
const aNaN = Number.NaN

// 有限数か否かの判定
// false -> Number.POSITIVE_INFINITY と Number.NaN
// true  -> ↑以外
console.log(Number.isFinite(aInfiniy))
console.log(Number.isFinite(aNaN))

console.log(Number.isFinite(5.5))
console.log(Number.isFinite(Number("")))

// Math
console.log("\nMath")
console.log(Math.floor(3.7)) // 小数点以下の切り捨て
console.log(Math.ceil(4.3)) // 小数点以下の切り上げ

// 余り
console.log("\n余り")
console.log(9 % 3) // 0
console.log(9.0 % 3) // 0
console.log(9.5 % 3) // 0.5 小数点以下の余りも計算してくれる
