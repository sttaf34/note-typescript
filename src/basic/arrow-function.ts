// 引数無し・返り値無し
const functionA = (): void => {
  console.log("Hello World!")
}
functionA()

// 引数あり・返り値あり
const functionB = (aNumber: number): number => {
  return aNumber * 2
}
console.log(functionB(3))

// 波括弧省略
const functionC = (aNumber: number): number => 3 * aNumber
console.log(functionC(4))

// 波括弧省略でオブジェクトを返すときは () で囲む
// 波括弧がオブジェクトを囲んでいるものか、処理内容を表すものかの区別のため
const functionD = (aNumber: number): { id: number } => ({ id: aNumber })
console.log(functionD(88))

// 引数が一つの時の () の省略は、tsconfig.json の設定によってはコンパイル不可
// const functionE = aNumber => aNumber * 2
// console.log(functionE(8))

// map 等の中で使う場合は、型が特定できるのでかなり省略できる、すっきり書ける
// aNumber => aNumber * 2
// 引数    => 処理
const numbers = Array<number>(8).fill(100)
const resultA = numbers.map((aNumber) => aNumber * 2)
console.log(resultA)

// map 等の中で使う場合で処理が複数行になる場合は、波括弧は省略できない
const resultB = numbers.map((aNumber) => {
  const tempNumber = aNumber * 2
  return tempNumber * 3
})
console.log(resultB)

// map 等の中でも、波括弧省略でオブジェクトを返すときは () で囲む
const resultC = numbers.map((aNumber) => ({ id: aNumber }))
console.log(resultC)

interface User {
  id: number
  name: string
}

// 引数をこんな書き方をたまに見かける
const functionE = ({ id, name }: User): void => {
  console.log(id)
  console.log(name)
}
const userA = { id: 1, name: "sttaf34" }
functionE(userA)
functionE({ id: 2, name: "sttaf34" })

export {}
