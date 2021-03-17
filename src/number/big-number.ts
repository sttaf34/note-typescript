import { BigNumber } from "bignumber.js"

// これの結果は 0.1 にならない
console.log(0.3 - 0.2)

// BigNumber を使って計算する
const a = new BigNumber(0.3)
const b = new BigNumber(0.2)
console.log(a.minus(b).toString())
