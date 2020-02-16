// filter の処理で null を取り除いてるはずなのだが、
// filter 後の numbers の型に null が含まれている
const nullAndNumbers = [3, 4, null, null, 100]
const numbersA = nullAndNumbers.filter(number => number !== null)
console.log(numbersA)

// null ではないことをチェックする Type Guard 用関数を定義する
// https://stackoverflow.com/questions/43118692/typescript-filter-out-nulls-from-an-array
// https://qiita.com/mangano-ito/items/5583783cd88ea5f4deb4
const isNotNull = <T>(item: T | null): item is T => {
  return item !== null
}

// 型が絞れる
const numbersB = nullAndNumbers.filter(isNotNull)
console.log(numbersB)

export {}
