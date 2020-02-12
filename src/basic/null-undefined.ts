// https://typescript-jp.gitbook.io/deep-dive/recap/null-undefined

const getUndefined = (): undefined => {
  return undefined
}

const undefinedVariable: undefined = getUndefined()
console.log(undefinedVariable)

// undefinedな変数の判定
console.log(undefinedVariable === undefined) // true
console.log(undefinedVariable === null) // false
console.log(undefinedVariable == null) // true

const getNull = (): null => {
  return null
}

const nullVariable = getNull()
console.log(nullVariable)

// nullな変数の判定
console.log(nullVariable === undefined) // false
// console.log(nullVariable == undefined) // true
console.log(nullVariable === null) // true
console.log(nullVariable == null) // true

// variable == null でどちらもまとめてチェックできる
// https://typescript-jp.gitbook.io/deep-dive/recap/null-undefined
