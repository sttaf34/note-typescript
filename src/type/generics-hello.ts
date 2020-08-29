// 任意の型で何かしらの値を渡せる Fruit 型
type Fruit<T> = {
  id: number
  name: string
  feature: T
}

// 型を明示してあげる必要がある
const fruit: Fruit<boolean> = {
  id: 1,
  name: "banana",
  feature: true,
}
console.log(fruit.feature)

// 任意の型の配列において、インデックスが有効かどうか検証する関数
const isValidArrayIndex = <T>(array: T[], index: number): boolean => {
  if (Number.isInteger(index) === false) {
    return false
  }
  if (index < 0 || array.length <= index) {
    return false
  }
  return true
}

// 型を明示して実行
console.log(isValidArrayIndex<number>([1, 2, 3], 0))

// 型推論されるので書かなくても大丈夫
// Show Hover すると number になってる
console.log(isValidArrayIndex([1, 2, 3], 1))

// Show Hover すると string | string になってる
console.log(isValidArrayIndex(["Hey", 2, 3], 0))

export {}
