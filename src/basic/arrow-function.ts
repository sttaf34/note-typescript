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
