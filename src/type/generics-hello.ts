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

// ジェネリクスの意味がないけど、任意の型を渡せる関数
// TODO: もうちょっと良い例に変更する
const consoleLog = <T>(value: T): void => {
  console.log(value)
}

// 型を渡して実行
consoleLog<number>(3)

export {}
