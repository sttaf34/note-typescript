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

// map 等の中で使う場合は、型が特定できるので大丈夫、すっきり書ける
const numbers = Array<number>(8).fill(100)
const result = numbers.map(aNumber => aNumber * 2)
console.log(result)

export {}
